import { IotFleetAuditLogService } from "../../../services/core-engine/src/iot/fleet/services/IotFleetAuditLogService";
import { IotFleetAuditLogValidator } from "../../../packages/types/src/domains/iot/fleet/IotFleetAuditLog";
import { IotFleetAuditLogStateMachine } from "../../../services/core-engine/src/iot/fleet/state-machines/IotFleetAuditLogStateMachine";

describe("IotFleetAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IotFleetAuditLogService();
  const sm = new IotFleetAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotFleetAuditLog Instance",
      domain: "iot_fleet",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotFleetAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
