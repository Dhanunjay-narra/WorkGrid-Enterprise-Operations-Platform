import { IotDevicesAuditLogService } from "../../../services/core-engine/src/iot/devices/services/IotDevicesAuditLogService";
import { IotDevicesAuditLogValidator } from "../../../packages/types/src/domains/iot/devices/IotDevicesAuditLog";
import { IotDevicesAuditLogStateMachine } from "../../../services/core-engine/src/iot/devices/state-machines/IotDevicesAuditLogStateMachine";

describe("IotDevicesAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IotDevicesAuditLogService();
  const sm = new IotDevicesAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotDevicesAuditLog Instance",
      domain: "iot_devices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotDevicesAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
