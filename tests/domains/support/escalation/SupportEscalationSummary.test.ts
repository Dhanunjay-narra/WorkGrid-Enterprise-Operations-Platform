import { SupportEscalationSummaryService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationSummaryService";
import { SupportEscalationSummaryValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationSummary";
import { SupportEscalationSummaryStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationSummaryStateMachine";

describe("SupportEscalationSummary Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationSummaryService();
  const sm = new SupportEscalationSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationSummary Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
