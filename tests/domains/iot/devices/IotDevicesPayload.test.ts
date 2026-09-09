import { IotDevicesPayloadService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesPayloadService";
import { IotDevicesPayloadValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesPayload";
import { IotDevicesPayloadStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesPayloadStateMachine";

describe("IotDevicesPayload Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesPayloadService();
  const sm = new IotDevicesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesPayload Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
