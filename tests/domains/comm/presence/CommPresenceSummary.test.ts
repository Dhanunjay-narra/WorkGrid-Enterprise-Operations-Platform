import { CommPresenceSummaryService } from "../../../services/core-engine/src/comm/presence/services/CommPresenceSummaryService";
import { CommPresenceSummaryValidator } from "../../../packages/types/src/domains/comm/presence/CommPresenceSummary";
import { CommPresenceSummaryStateMachine } from "../../../services/core-engine/src/comm/presence/state-machines/CommPresenceSummaryStateMachine";

describe("CommPresenceSummary Comprehensive Domain Test Suite", () => {
  const service = new CommPresenceSummaryService();
  const sm = new CommPresenceSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommPresenceSummary Instance",
      domain: "comm_presence",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommPresenceSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
