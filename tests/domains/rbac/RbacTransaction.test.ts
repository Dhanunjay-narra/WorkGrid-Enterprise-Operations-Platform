import { RbacTransactionService } from "../../../services/core-engine/src/rbac/services/RbacTransactionService";
import { RbacTransactionValidator } from "../../../packages/types/src/domains/rbac/RbacTransaction";
import { RbacTransactionStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacTransactionStateMachine";

describe("RbacTransaction Comprehensive Domain Test Suite", () => {
  const service = new RbacTransactionService();
  const sm = new RbacTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacTransaction Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
