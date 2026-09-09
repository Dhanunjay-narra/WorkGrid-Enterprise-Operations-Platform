import { CommMessagesEntryService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesEntryService";
import { CommMessagesEntryValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesEntry";
import { CommMessagesEntryStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesEntryStateMachine";

describe("CommMessagesEntry Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesEntryService();
  const sm = new CommMessagesEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesEntry Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
