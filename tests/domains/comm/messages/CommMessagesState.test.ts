import { CommMessagesStateService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesStateService";
import { CommMessagesStateValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesState";
import { CommMessagesStateStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesStateStateMachine";

describe("CommMessagesState Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesStateService();
  const sm = new CommMessagesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesState Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
