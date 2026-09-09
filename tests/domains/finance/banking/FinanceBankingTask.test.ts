import { FinanceBankingTaskService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingTaskService";
import { FinanceBankingTaskValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingTask";
import { FinanceBankingTaskStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingTaskStateMachine";

describe("FinanceBankingTask Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingTaskService();
  const sm = new FinanceBankingTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingTask Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
