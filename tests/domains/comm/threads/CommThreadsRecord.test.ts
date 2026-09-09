import { CommThreadsRecordService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsRecordService";
import { CommThreadsRecordValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsRecord";
import { CommThreadsRecordStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsRecordStateMachine";

describe("CommThreadsRecord Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsRecordService();
  const sm = new CommThreadsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsRecord Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
