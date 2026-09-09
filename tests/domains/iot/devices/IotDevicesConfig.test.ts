import { IotDevicesConfigService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesConfigService";
import { IotDevicesConfigValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesConfig";
import { IotDevicesConfigStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesConfigStateMachine";

describe("IotDevicesConfig Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesConfigService();
  const sm = new IotDevicesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesConfig Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
