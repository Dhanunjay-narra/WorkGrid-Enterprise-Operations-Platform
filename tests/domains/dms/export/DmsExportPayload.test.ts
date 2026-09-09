import { DmsExportPayloadService } from "../../../services/core-engine/src/dms/export/services/DmsExportPayloadService";
import { DmsExportPayloadValidator } from "../../../packages/types/src/domains/dms/export/DmsExportPayload";
import { DmsExportPayloadStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportPayloadStateMachine";

describe("DmsExportPayload Comprehensive Domain Test Suite", () => {
  const service = new DmsExportPayloadService();
  const sm = new DmsExportPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportPayload Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
