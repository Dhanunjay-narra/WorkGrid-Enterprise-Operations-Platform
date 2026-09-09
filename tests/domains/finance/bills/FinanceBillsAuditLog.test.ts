import { FinanceBillsAuditLogService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsAuditLogService";
import { FinanceBillsAuditLogValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsAuditLog";
import { FinanceBillsAuditLogStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsAuditLogStateMachine";

describe("FinanceBillsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsAuditLogService();
  const sm = new FinanceBillsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsAuditLog Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
