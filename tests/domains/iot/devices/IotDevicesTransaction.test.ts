import { IotDevicesTransactionService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesTransactionService";
import { IotDevicesTransactionValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesTransaction";
import { IotDevicesTransactionStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesTransactionStateMachine";

describe("IotDevicesTransaction Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesTransactionService();
  const sm = new IotDevicesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesTransaction Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
