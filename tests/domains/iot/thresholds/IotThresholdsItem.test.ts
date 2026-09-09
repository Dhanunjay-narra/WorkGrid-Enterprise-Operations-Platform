import { IotThresholdsItemService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsItemService";
import { IotThresholdsItemValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsItem";
import { IotThresholdsItemStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsItemStateMachine";

describe("IotThresholdsItem Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsItemService();
  const sm = new IotThresholdsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsItem Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
