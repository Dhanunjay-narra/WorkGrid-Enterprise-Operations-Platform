import { DmsVersionsAuditLogService } from "../../../services/core-engine/src/dms/versions/services/DmsVersionsAuditLogService";
import { DmsVersionsAuditLogValidator } from "../../../packages/types/src/domains/dms/versions/DmsVersionsAuditLog";
import { DmsVersionsAuditLogStateMachine } from "../../../services/core-engine/src/dms/versions/state-machines/DmsVersionsAuditLogStateMachine";

describe("DmsVersionsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new DmsVersionsAuditLogService();
  const sm = new DmsVersionsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsVersionsAuditLog Instance",
      domain: "dms_versions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsVersionsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
