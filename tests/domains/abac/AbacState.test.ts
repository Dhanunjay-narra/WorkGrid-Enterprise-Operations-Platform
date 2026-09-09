import { AbacStateService } from "../../../services/core-engine/src/abac/services/AbacStateService";
import { AbacStateValidator } from "../../../packages/types/src/domains/abac/AbacState";
import { AbacStateStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacStateStateMachine";

describe("AbacState Comprehensive Domain Test Suite", () => {
  const service = new AbacStateService();
  const sm = new AbacStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacState Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
