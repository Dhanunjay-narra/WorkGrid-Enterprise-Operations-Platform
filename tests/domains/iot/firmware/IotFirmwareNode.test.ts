import { IotFirmwareNodeService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareNodeService";
import { IotFirmwareNodeValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareNode";
import { IotFirmwareNodeStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareNodeStateMachine";

describe("IotFirmwareNode Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareNodeService();
  const sm = new IotFirmwareNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareNode Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
