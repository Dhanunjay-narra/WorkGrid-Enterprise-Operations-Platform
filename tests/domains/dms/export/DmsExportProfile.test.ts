import { DmsExportProfileService } from "../../../services/core-engine/src/dms/export/services/DmsExportProfileService";
import { DmsExportProfileValidator } from "../../../packages/types/src/domains/dms/export/DmsExportProfile";
import { DmsExportProfileStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportProfileStateMachine";

describe("DmsExportProfile Comprehensive Domain Test Suite", () => {
  const service = new DmsExportProfileService();
  const sm = new DmsExportProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportProfile Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
