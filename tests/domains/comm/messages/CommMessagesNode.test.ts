import { CommMessagesNodeService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesNodeService";
import { CommMessagesNodeValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesNode";
import { CommMessagesNodeStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesNodeStateMachine";

describe("CommMessagesNode Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesNodeService();
  const sm = new CommMessagesNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesNode Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
