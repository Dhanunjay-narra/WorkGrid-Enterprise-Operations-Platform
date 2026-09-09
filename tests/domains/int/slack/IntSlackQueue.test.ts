import { IntSlackQueueService } from "../../../services/core-engine/src/int/slack/services/IntSlackQueueService";
import { IntSlackQueueValidator } from "../../../packages/types/src/domains/int/slack/IntSlackQueue";
import { IntSlackQueueStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackQueueStateMachine";

describe("IntSlackQueue Comprehensive Domain Test Suite", () => {
  const service = new IntSlackQueueService();
  const sm = new IntSlackQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackQueue Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
