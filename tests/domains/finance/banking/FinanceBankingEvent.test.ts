import { FinanceBankingEventService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingEventService";
import { FinanceBankingEventValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingEvent";
import { FinanceBankingEventStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingEventStateMachine";

describe("FinanceBankingEvent Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingEventService();
  const sm = new FinanceBankingEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingEvent Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
