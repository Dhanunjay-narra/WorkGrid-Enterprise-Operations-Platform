import { IotDevicesQueueService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesQueueService";
import { IotDevicesQueueValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesQueue";
import { IotDevicesQueueStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesQueueStateMachine";

describe("IotDevicesQueue Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesQueueService();
  const sm = new IotDevicesQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesQueue Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
