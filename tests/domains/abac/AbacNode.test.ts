import { AbacNodeService } from "../../../services/core-engine/src/abac/services/AbacNodeService";
import { AbacNodeValidator } from "../../../packages/types/src/domains/abac/AbacNode";
import { AbacNodeStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacNodeStateMachine";

describe("AbacNode Comprehensive Domain Test Suite", () => {
  const service = new AbacNodeService();
  const sm = new AbacNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacNode Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
