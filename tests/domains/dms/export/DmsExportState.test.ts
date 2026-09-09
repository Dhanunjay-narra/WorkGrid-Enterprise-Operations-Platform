import { DmsExportStateService } from "../../../services/core-engine/src/dms/export/services/DmsExportStateService";
import { DmsExportStateValidator } from "../../../packages/types/src/domains/dms/export/DmsExportState";
import { DmsExportStateStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportStateStateMachine";

describe("DmsExportState Comprehensive Domain Test Suite", () => {
  const service = new DmsExportStateService();
  const sm = new DmsExportStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportState Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
