import { FinanceTreasuryAuditLogService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryAuditLogService";
import { FinanceTreasuryAuditLogValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryAuditLog";
import { FinanceTreasuryAuditLogStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryAuditLogStateMachine";

describe("FinanceTreasuryAuditLog Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryAuditLogService();
  const sm = new FinanceTreasuryAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryAuditLog Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
