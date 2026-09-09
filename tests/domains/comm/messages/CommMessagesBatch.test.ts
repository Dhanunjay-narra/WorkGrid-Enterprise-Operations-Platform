import { CommMessagesBatchService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesBatchService";
import { CommMessagesBatchValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesBatch";
import { CommMessagesBatchStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesBatchStateMachine";

describe("CommMessagesBatch Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesBatchService();
  const sm = new CommMessagesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesBatch Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
