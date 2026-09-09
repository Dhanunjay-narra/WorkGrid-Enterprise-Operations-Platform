import { IotDevicesThresholdService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesThresholdService";
import { IotDevicesThresholdValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesThreshold";
import { IotDevicesThresholdStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesThresholdStateMachine";

describe("IotDevicesThreshold Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesThresholdService();
  const sm = new IotDevicesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesThreshold Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
