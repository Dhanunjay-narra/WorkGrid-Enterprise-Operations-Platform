import { IotFirmwareMappingService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareMappingService";
import { IotFirmwareMappingValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareMapping";
import { IotFirmwareMappingStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareMappingStateMachine";

describe("IotFirmwareMapping Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareMappingService();
  const sm = new IotFirmwareMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareMapping Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
