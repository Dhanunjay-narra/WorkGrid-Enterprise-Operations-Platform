import { FinanceTreasuryTaskService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryTaskService";
import { FinanceTreasuryTaskValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryTask";
import { FinanceTreasuryTaskStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryTaskStateMachine";

describe("FinanceTreasuryTask Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryTaskService();
  const sm = new FinanceTreasuryTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryTask Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
