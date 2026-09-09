import { CommThreadsPayloadService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsPayloadService";
import { CommThreadsPayloadValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsPayload";
import { CommThreadsPayloadStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsPayloadStateMachine";

describe("CommThreadsPayload Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsPayloadService();
  const sm = new CommThreadsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsPayload Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
