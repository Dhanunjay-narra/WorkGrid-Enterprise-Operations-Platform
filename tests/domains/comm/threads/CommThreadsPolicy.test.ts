import { CommThreadsPolicyService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsPolicyService";
import { CommThreadsPolicyValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsPolicy";
import { CommThreadsPolicyStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsPolicyStateMachine";

describe("CommThreadsPolicy Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsPolicyService();
  const sm = new CommThreadsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsPolicy Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
