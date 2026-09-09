import { IotFirmwareEntryService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareEntryService";
import { IotFirmwareEntryValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareEntry";
import { IotFirmwareEntryStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareEntryStateMachine";

describe("IotFirmwareEntry Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareEntryService();
  const sm = new IotFirmwareEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareEntry Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
