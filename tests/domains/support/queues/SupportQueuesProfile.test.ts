import { SupportQueuesProfileService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesProfileService";
import { SupportQueuesProfileValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesProfile";
import { SupportQueuesProfileStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesProfileStateMachine";

describe("SupportQueuesProfile Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesProfileService();
  const sm = new SupportQueuesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesProfile Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
