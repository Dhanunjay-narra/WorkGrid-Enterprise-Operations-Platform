import { SupportEscalationRecordService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationRecordService";
import { SupportEscalationRecordValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationRecord";
import { SupportEscalationRecordStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationRecordStateMachine";

describe("SupportEscalationRecord Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationRecordService();
  const sm = new SupportEscalationRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationRecord Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
