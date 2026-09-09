import { AbacTaskService } from "../../../services/core-engine/src/abac/services/AbacTaskService";
import { AbacTaskValidator } from "../../../packages/types/src/domains/abac/AbacTask";
import { AbacTaskStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacTaskStateMachine";

describe("AbacTask Comprehensive Domain Test Suite", () => {
  const service = new AbacTaskService();
  const sm = new AbacTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacTask Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
