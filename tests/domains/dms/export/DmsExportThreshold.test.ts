import { DmsExportThresholdService } from "../../../services/core-engine/src/dms/export/services/DmsExportThresholdService";
import { DmsExportThresholdValidator } from "../../../packages/types/src/domains/dms/export/DmsExportThreshold";
import { DmsExportThresholdStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportThresholdStateMachine";

describe("DmsExportThreshold Comprehensive Domain Test Suite", () => {
  const service = new DmsExportThresholdService();
  const sm = new DmsExportThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportThreshold Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
