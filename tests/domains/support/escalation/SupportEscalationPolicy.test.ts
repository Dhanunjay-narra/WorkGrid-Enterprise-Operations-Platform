import { SupportEscalationPolicyService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationPolicyService";
import { SupportEscalationPolicyValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationPolicy";
import { SupportEscalationPolicyStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationPolicyStateMachine";

describe("SupportEscalationPolicy Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationPolicyService();
  const sm = new SupportEscalationPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationPolicy Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
