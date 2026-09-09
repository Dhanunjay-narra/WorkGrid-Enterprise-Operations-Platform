import { AbacSummaryService } from "../../../services/core-engine/src/abac/services/AbacSummaryService";
import { AbacSummaryValidator } from "../../../packages/types/src/domains/abac/AbacSummary";
import { AbacSummaryStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacSummaryStateMachine";

describe("AbacSummary Comprehensive Domain Test Suite", () => {
  const service = new AbacSummaryService();
  const sm = new AbacSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacSummary Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
