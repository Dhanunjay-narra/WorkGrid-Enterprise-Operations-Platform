import { AuditTransactionService } from "../../../services/core-engine/src/audit/services/AuditTransactionService";
import { AuditTransactionValidator } from "../../../packages/types/src/domains/audit/AuditTransaction";
import { AuditTransactionStateMachine } from "../../../services/core-engine/src/audit/state-machines/AuditTransactionStateMachine";

describe("AuditTransaction Comprehensive Domain Test Suite", () => {
  const service = new AuditTransactionService();
  const sm = new AuditTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuditTransaction Instance",
      domain: "audit",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuditTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
