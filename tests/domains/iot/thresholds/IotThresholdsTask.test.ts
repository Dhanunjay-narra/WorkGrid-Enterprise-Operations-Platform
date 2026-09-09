import { IotThresholdsTaskService } from "../../../services/core-engine/src/iot/thresholds/services/IotThresholdsTaskService";
import { IotThresholdsTaskValidator } from "../../../packages/types/src/domains/iot/thresholds/IotThresholdsTask";
import { IotThresholdsTaskStateMachine } from "../../../services/core-engine/src/iot/thresholds/state-machines/IotThresholdsTaskStateMachine";

describe("IotThresholdsTask Comprehensive Domain Test Suite", () => {
  const service = new IotThresholdsTaskService();
  const sm = new IotThresholdsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotThresholdsTask Instance",
      domain: "iot_thresholds",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotThresholdsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
