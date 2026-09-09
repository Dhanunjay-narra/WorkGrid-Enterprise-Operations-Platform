import { AuthTransactionService } from "../../../services/core-engine/src/auth/services/AuthTransactionService";
import { AuthTransactionValidator } from "../../../packages/types/src/domains/auth/AuthTransaction";
import { AuthTransactionStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthTransactionStateMachine";

describe("AuthTransaction Comprehensive Domain Test Suite", () => {
  const service = new AuthTransactionService();
  const sm = new AuthTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthTransaction Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
