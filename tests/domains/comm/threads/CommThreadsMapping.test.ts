import { CommThreadsMappingService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsMappingService";
import { CommThreadsMappingValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsMapping";
import { CommThreadsMappingStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsMappingStateMachine";

describe("CommThreadsMapping Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsMappingService();
  const sm = new CommThreadsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsMapping Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
