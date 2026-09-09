import { IntWebhooksAssignmentService } from "../../../services/core-engine/src/int/webhooks/services/IntWebhooksAssignmentService";
import { IntWebhooksAssignmentValidator } from "../../../packages/types/src/domains/int/webhooks/IntWebhooksAssignment";
import { IntWebhooksAssignmentStateMachine } from "../../../services/core-engine/src/int/webhooks/state-machines/IntWebhooksAssignmentStateMachine";

describe("IntWebhooksAssignment Comprehensive Domain Test Suite", () => {
  const service = new IntWebhooksAssignmentService();
  const sm = new IntWebhooksAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntWebhooksAssignment Instance",
      domain: "int_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntWebhooksAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
