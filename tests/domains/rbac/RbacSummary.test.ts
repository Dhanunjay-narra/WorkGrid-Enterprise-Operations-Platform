import { RbacSummaryService } from "../../../services/core-engine/src/rbac/services/RbacSummaryService";
import { RbacSummaryValidator } from "../../../packages/types/src/domains/rbac/RbacSummary";
import { RbacSummaryStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacSummaryStateMachine";

describe("RbacSummary Comprehensive Domain Test Suite", () => {
  const service = new RbacSummaryService();
  const sm = new RbacSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacSummary Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
