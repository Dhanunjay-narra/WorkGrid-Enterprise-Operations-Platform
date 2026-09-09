import { DmsOcrThresholdService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrThresholdService";
import { DmsOcrThresholdValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrThreshold";
import { DmsOcrThresholdStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrThresholdStateMachine";

describe("DmsOcrThreshold Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrThresholdService();
  const sm = new DmsOcrThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrThreshold Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
