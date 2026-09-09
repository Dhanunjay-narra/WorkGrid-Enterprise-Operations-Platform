import { IotFirmwareBatchService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareBatchService";
import { IotFirmwareBatchValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareBatch";
import { IotFirmwareBatchStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareBatchStateMachine";

describe("IotFirmwareBatch Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareBatchService();
  const sm = new IotFirmwareBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareBatch Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
