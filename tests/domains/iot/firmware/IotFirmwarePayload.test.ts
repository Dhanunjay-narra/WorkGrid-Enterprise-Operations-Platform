import { IotFirmwarePayloadService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwarePayloadService";
import { IotFirmwarePayloadValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwarePayload";
import { IotFirmwarePayloadStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwarePayloadStateMachine";

describe("IotFirmwarePayload Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwarePayloadService();
  const sm = new IotFirmwarePayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwarePayload Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwarePayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
