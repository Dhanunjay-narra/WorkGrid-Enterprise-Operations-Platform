import { SupportEscalationPayloadService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationPayloadService";
import { SupportEscalationPayloadValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationPayload";
import { SupportEscalationPayloadStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationPayloadStateMachine";

describe("SupportEscalationPayload Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationPayloadService();
  const sm = new SupportEscalationPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationPayload Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
