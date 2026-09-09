import { IotDevicesNodeService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesNodeService";
import { IotDevicesNodeValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesNode";
import { IotDevicesNodeStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesNodeStateMachine";

describe("IotDevicesNode Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesNodeService();
  const sm = new IotDevicesNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesNode Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
