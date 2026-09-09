import { BiQueriesAuditLogService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesAuditLogService";
import { BiQueriesAuditLogValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesAuditLog";
import { BiQueriesAuditLogStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesAuditLogStateMachine";

describe("BiQueriesAuditLog Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesAuditLogService();
  const sm = new BiQueriesAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesAuditLog Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
