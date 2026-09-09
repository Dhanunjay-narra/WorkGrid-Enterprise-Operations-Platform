import { CommMessagesSnapshotService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesSnapshotService";
import { CommMessagesSnapshotValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesSnapshot";
import { CommMessagesSnapshotStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesSnapshotStateMachine";

describe("CommMessagesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesSnapshotService();
  const sm = new CommMessagesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesSnapshot Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
