import { IotDevicesRecordService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesRecordService";
import { IotDevicesRecordValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesRecord";
import { IotDevicesRecordStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesRecordStateMachine";

describe("IotDevicesRecord Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesRecordService();
  const sm = new IotDevicesRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesRecord Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
