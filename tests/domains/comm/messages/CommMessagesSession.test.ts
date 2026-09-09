import { CommMessagesSessionService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesSessionService";
import { CommMessagesSessionValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesSession";
import { CommMessagesSessionStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesSessionStateMachine";

describe("CommMessagesSession Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesSessionService();
  const sm = new CommMessagesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesSession Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
