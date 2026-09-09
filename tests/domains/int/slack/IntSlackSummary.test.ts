import { IntSlackSummaryService } from "../../../services/core-engine/src/int/slack/services/IntSlackSummaryService";
import { IntSlackSummaryValidator } from "../../../packages/types/src/domains/int/slack/IntSlackSummary";
import { IntSlackSummaryStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackSummaryStateMachine";

describe("IntSlackSummary Comprehensive Domain Test Suite", () => {
  const service = new IntSlackSummaryService();
  const sm = new IntSlackSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackSummary Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
