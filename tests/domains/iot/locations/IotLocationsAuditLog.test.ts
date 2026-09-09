import { IotLocationsAuditLogService } from "../../../services/core-engine/src/iot/locations/services/IotLocationsAuditLogService";
import { IotLocationsAuditLogValidator } from "../../../packages/types/src/domains/iot/locations/IotLocationsAuditLog";
import { IotLocationsAuditLogStateMachine } from "../../../services/core-engine/src/iot/locations/state-machines/IotLocationsAuditLogStateMachine";

describe("IotLocationsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IotLocationsAuditLogService();
  const sm = new IotLocationsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IotLocationsAuditLog Instance",
      domain: "iot_locations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IotLocationsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
