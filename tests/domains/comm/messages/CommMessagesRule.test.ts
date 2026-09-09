import { CommMessagesRuleService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesRuleService";
import { CommMessagesRuleValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesRule";
import { CommMessagesRuleStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesRuleStateMachine";

describe("CommMessagesRule Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesRuleService();
  const sm = new CommMessagesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesRule Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
