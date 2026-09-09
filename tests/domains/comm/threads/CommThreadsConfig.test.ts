import { CommThreadsConfigService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsConfigService";
import { CommThreadsConfigValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsConfig";
import { CommThreadsConfigStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsConfigStateMachine";

describe("CommThreadsConfig Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsConfigService();
  const sm = new CommThreadsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsConfig Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
