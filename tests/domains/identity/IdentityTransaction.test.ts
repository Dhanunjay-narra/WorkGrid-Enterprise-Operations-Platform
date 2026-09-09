import { IdentityTransactionService } from "../../../services/core-engine/src/identity/services/IdentityTransactionService";
import { IdentityTransactionValidator } from "../../../packages/types/src/domains/identity/IdentityTransaction";
import { IdentityTransactionStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityTransactionStateMachine";

describe("IdentityTransaction Comprehensive Domain Test Suite", () => {
  const service = new IdentityTransactionService();
  const sm = new IdentityTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityTransaction Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
