import { CommMessagesTaskService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesTaskService";
import { CommMessagesTaskValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesTask";
import { CommMessagesTaskStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesTaskStateMachine";

describe("CommMessagesTask Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesTaskService();
  const sm = new CommMessagesTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesTask Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
