import { AbacProfileService } from "../../../services/core-engine/src/abac/services/AbacProfileService";
import { AbacProfileValidator } from "../../../packages/types/src/domains/abac/AbacProfile";
import { AbacProfileStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacProfileStateMachine";

describe("AbacProfile Comprehensive Domain Test Suite", () => {
  const service = new AbacProfileService();
  const sm = new AbacProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacProfile Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
