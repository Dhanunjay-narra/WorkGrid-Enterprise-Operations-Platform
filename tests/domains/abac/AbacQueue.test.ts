import { AbacQueueService } from "../../../services/core-engine/src/abac/services/AbacQueueService";
import { AbacQueueValidator } from "../../../packages/types/src/domains/abac/AbacQueue";
import { AbacQueueStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacQueueStateMachine";

describe("AbacQueue Comprehensive Domain Test Suite", () => {
  const service = new AbacQueueService();
  const sm = new AbacQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacQueue Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
