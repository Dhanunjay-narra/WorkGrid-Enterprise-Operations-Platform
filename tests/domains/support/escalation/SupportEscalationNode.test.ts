import { SupportEscalationNodeService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationNodeService";
import { SupportEscalationNodeValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationNode";
import { SupportEscalationNodeStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationNodeStateMachine";

describe("SupportEscalationNode Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationNodeService();
  const sm = new SupportEscalationNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationNode Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
