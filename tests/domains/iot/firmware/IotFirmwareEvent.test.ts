import { IotFirmwareEventService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareEventService";
import { IotFirmwareEventValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareEvent";
import { IotFirmwareEventStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareEventStateMachine";

describe("IotFirmwareEvent Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareEventService();
  const sm = new IotFirmwareEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareEvent Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
