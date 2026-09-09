import { IotThresholdsRuleService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsRuleService";
import { IotThresholdsRuleValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsRule";
import { IotThresholdsRuleStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsRuleStateMachine";

describe("IotThresholdsRule Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsRuleService();
  const sm = new IotThresholdsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsRule Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
