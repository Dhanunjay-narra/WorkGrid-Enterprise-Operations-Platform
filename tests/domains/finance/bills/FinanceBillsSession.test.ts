import { FinanceBillsSessionService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsSessionService";
import { FinanceBillsSessionValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsSession";
import { FinanceBillsSessionStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsSessionStateMachine";

describe("FinanceBillsSession Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsSessionService();
  const sm = new FinanceBillsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsSession Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
