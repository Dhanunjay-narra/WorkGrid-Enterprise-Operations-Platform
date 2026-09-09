import { IotFirmwareAuditLogService } from "../../../services/core-engine/src/iot/firmware/services/IotFirmwareAuditLogService";
import { IotFirmwareAuditLogValidator } from "../../../packages/types/src/domains/iot/firmware/IotFirmwareAuditLog";
import { IotFirmwareAuditLogStateMachine } from "../../../services/core-engine/src/iot/firmware/state-machines/IotFirmwareAuditLogStateMachine";

describe("IotFirmwareAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IotFirmwareAuditLogService();
  const sm = new IotFirmwareAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFirmwareAuditLog Instance",
      domain: "iot_firmware",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFirmwareAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
