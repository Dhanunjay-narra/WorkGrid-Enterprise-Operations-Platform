import { ComplianceQueueService } from "../../../services/core-engine/src/compliance/services/ComplianceQueueService";
import { ComplianceQueueValidator } from "../../../packages/types/src/domains/compliance/ComplianceQueue";
import { ComplianceQueueStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceQueueStateMachine";

describe("ComplianceQueue Comprehensive Domain Test Suite", () => {
  const service = new ComplianceQueueService();
  const sm = new ComplianceQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceQueue Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
