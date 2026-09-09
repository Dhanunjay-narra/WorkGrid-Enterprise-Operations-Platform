import { CommThreadsSummaryService } from "../../../services/core-engine/src/comm/threads/services/CommThreadsSummaryService";
import { CommThreadsSummaryValidator } from "../../../packages/types/src/domains/comm/threads/CommThreadsSummary";
import { CommThreadsSummaryStateMachine } from "../../../services/core-engine/src/comm/threads/state-machines/CommThreadsSummaryStateMachine";

describe("CommThreadsSummary Comprehensive Domain Test Suite", () => {
  const service = new CommThreadsSummaryService();
  const sm = new CommThreadsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommThreadsSummary Instance",
      domain: "comm_threads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommThreadsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
