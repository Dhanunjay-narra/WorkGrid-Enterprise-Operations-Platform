import { AbacAuditLogService } from "../../../services/core-engine/src/abac/services/AbacAuditLogService";
import { AbacAuditLogValidator } from "../../../packages/types/src/domains/abac/AbacAuditLog";
import { AbacAuditLogStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacAuditLogStateMachine";

describe("AbacAuditLog Comprehensive Domain Test Suite", () => {
  const service = new AbacAuditLogService();
  const sm = new AbacAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacAuditLog Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
