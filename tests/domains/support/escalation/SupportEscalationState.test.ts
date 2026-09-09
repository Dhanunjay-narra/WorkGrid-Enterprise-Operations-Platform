import { SupportEscalationStateService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationStateService";
import { SupportEscalationStateValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationState";
import { SupportEscalationStateStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationStateStateMachine";

describe("SupportEscalationState Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationStateService();
  const sm = new SupportEscalationStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationState Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
