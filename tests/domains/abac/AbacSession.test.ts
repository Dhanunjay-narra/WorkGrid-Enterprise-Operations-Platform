import { AbacSessionService } from "../../../services/core-engine/src/abac/services/AbacSessionService";
import { AbacSessionValidator } from "../../../packages/types/src/domains/abac/AbacSession";
import { AbacSessionStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacSessionStateMachine";

describe("AbacSession Comprehensive Domain Test Suite", () => {
  const service = new AbacSessionService();
  const sm = new AbacSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacSession Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
