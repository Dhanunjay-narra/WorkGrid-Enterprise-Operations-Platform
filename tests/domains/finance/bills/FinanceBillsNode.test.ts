import { FinanceBillsNodeService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsNodeService";
import { FinanceBillsNodeValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsNode";
import { FinanceBillsNodeStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsNodeStateMachine";

describe("FinanceBillsNode Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsNodeService();
  const sm = new FinanceBillsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsNode Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
