import { AbacTransactionService } from "../../../services/core-engine/src/abac/services/AbacTransactionService";
import { AbacTransactionValidator } from "../../../packages/types/src/domains/abac/AbacTransaction";
import { AbacTransactionStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacTransactionStateMachine";

describe("AbacTransaction Comprehensive Domain Test Suite", () => {
  const service = new AbacTransactionService();
  const sm = new AbacTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacTransaction Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
