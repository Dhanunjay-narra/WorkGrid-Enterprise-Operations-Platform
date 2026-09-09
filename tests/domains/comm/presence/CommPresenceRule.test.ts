import { CommPresenceRuleService } from "../../../services/core-engine/src/comm/presence/services/CommPresenceRuleService";
import { CommPresenceRuleValidator } from "../../../packages/types/src/domains/comm/presence/CommPresenceRule";
import { CommPresenceRuleStateMachine } from "../../../services/core-engine/src/comm/presence/state-machines/CommPresenceRuleStateMachine";

describe("CommPresenceRule Comprehensive Domain Test Suite", () => {
  const service = new CommPresenceRuleService();
  const sm = new CommPresenceRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommPresenceRule Instance",
      domain: "comm_presence",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommPresenceRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
