import { IdentityQueueService } from "../../../services/core-engine/src/identity/services/IdentityQueueService";
import { IdentityQueueValidator } from "../../../packages/types/src/domains/identity/IdentityQueue";
import { IdentityQueueStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityQueueStateMachine";

describe("IdentityQueue Comprehensive Domain Test Suite", () => {
  const service = new IdentityQueueService();
  const sm = new IdentityQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityQueue Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
