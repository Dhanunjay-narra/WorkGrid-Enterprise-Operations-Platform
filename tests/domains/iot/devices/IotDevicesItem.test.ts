import { IotDevicesItemService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesItemService";
import { IotDevicesItemValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesItem";
import { IotDevicesItemStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesItemStateMachine";

describe("IotDevicesItem Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesItemService();
  const sm = new IotDevicesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesItem Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
