import { IotThresholdsNodeService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsNodeService";
import { IotThresholdsNodeValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsNode";
import { IotThresholdsNodeStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsNodeStateMachine";

describe("IotThresholdsNode Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsNodeService();
  const sm = new IotThresholdsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsNode Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
