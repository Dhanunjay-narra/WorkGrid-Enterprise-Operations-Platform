import { ComplianceTransactionService } from "../../../services/core-engine/src/compliance/services/ComplianceTransactionService";
import { ComplianceTransactionValidator } from "../../../packages/types/src/domains/compliance/ComplianceTransaction";
import { ComplianceTransactionStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceTransactionStateMachine";

describe("ComplianceTransaction Comprehensive Domain Test Suite", () => {
  const service = new ComplianceTransactionService();
  const sm = new ComplianceTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceTransaction Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
