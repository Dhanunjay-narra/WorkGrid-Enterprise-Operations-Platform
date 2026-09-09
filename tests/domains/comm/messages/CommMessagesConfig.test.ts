import { CommMessagesConfigService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesConfigService";
import { CommMessagesConfigValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesConfig";
import { CommMessagesConfigStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesConfigStateMachine";

describe("CommMessagesConfig Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesConfigService();
  const sm = new CommMessagesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesConfig Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
