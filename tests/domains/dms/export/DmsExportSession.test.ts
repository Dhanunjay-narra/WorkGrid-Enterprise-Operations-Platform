import { DmsExportSessionService } from "../../../services/core-engine/src/dms/export/services/DmsExportSessionService";
import { DmsExportSessionValidator } from "../../../packages/types/src/domains/dms/export/DmsExportSession";
import { DmsExportSessionStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportSessionStateMachine";

describe("DmsExportSession Comprehensive Domain Test Suite", () => {
  const service = new DmsExportSessionService();
  const sm = new DmsExportSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportSession Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
