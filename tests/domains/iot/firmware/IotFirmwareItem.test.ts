import { IotFirmwareItemService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareItemService";
import { IotFirmwareItemValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareItem";
import { IotFirmwareItemStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareItemStateMachine";

describe("IotFirmwareItem Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareItemService();
  const sm = new IotFirmwareItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareItem Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
