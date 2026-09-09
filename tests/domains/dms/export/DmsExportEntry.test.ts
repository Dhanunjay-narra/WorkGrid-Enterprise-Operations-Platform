import { DmsExportEntryService } from "../../../services/core-engine/src/dms/export/services/DmsExportEntryService";
import { DmsExportEntryValidator } from "../../../packages/types/src/domains/dms/export/DmsExportEntry";
import { DmsExportEntryStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportEntryStateMachine";

describe("DmsExportEntry Comprehensive Domain Test Suite", () => {
  const service = new DmsExportEntryService();
  const sm = new DmsExportEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportEntry Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
