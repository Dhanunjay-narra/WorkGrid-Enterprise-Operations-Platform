import { IotThresholdsQueueService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsQueueService";
import { IotThresholdsQueueValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsQueue";
import { IotThresholdsQueueStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsQueueStateMachine";

describe("IotThresholdsQueue Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsQueueService();
  const sm = new IotThresholdsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsQueue Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
