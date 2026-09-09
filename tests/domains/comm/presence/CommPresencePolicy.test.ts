import { CommPresencePolicyService } from "../../../services/core-engine/src/comm/presence/services/CommPresencePolicyService";
import { CommPresencePolicyValidator } from "../../../packages/types/src/domains/comm/presence/CommPresencePolicy";
import { CommPresencePolicyStateMachine } from "../../../services/core-engine/src/comm/presence/state-machines/CommPresencePolicyStateMachine";

describe("CommPresencePolicy Comprehensive Domain Test Suite", () => {
  const service = new CommPresencePolicyService();
  const sm = new CommPresencePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommPresencePolicy Instance",
      domain: "comm_presence",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommPresencePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
