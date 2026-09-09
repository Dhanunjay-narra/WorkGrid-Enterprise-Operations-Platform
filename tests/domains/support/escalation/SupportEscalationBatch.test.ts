import { SupportEscalationBatchService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationBatchService";
import { SupportEscalationBatchValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationBatch";
import { SupportEscalationBatchStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationBatchStateMachine";

describe("SupportEscalationBatch Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationBatchService();
  const sm = new SupportEscalationBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationBatch Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
