import { FinanceTreasurySessionService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasurySessionService";
import { FinanceTreasurySessionValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasurySession";
import { FinanceTreasurySessionStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasurySessionStateMachine";

describe("FinanceTreasurySession Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasurySessionService();
  const sm = new FinanceTreasurySessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasurySession Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasurySessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
