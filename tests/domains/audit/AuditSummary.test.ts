import { AuditSummaryService } from "../../../services/core-engine/src/audit/services/AuditSummaryService";
import { AuditSummaryValidator } from "../../../packages/types/src/domains/audit/AuditSummary";
import { AuditSummaryStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditSummaryStateMachine";

describe("AuditSummary Comprehensive Domain Test Suite", () => {
  const service = new AuditSummaryService();
  const sm = new AuditSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditSummary Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
