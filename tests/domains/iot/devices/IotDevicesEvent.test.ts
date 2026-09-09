import { IotDevicesEventService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesEventService";
import { IotDevicesEventValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesEvent";
import { IotDevicesEventStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesEventStateMachine";

describe("IotDevicesEvent Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesEventService();
  const sm = new IotDevicesEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesEvent Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
