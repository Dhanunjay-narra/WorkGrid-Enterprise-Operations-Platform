import { FinanceTreasuryAssignmentService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryAssignmentService";
import { FinanceTreasuryAssignmentValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryAssignment";
import { FinanceTreasuryAssignmentStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryAssignmentStateMachine";

describe("FinanceTreasuryAssignment Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryAssignmentService();
  const sm = new FinanceTreasuryAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryAssignment Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
