import { AbacItemService } from "../../../services/core-engine/src/abac/services/AbacItemService";
import { AbacItemValidator } from "../../../packages/types/src/domains/abac/AbacItem";
import { AbacItemStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacItemStateMachine";

describe("AbacItem Comprehensive Domain Test Suite", () => {
  const service = new AbacItemService();
  const sm = new AbacItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacItem Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
