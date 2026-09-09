import { IntSlackEventService } from "../../../services/core-engine/src/int/slack/services/IntSlackEventService";
import { IntSlackEventValidator } from "../../../packages/types/src/domains/int/slack/IntSlackEvent";
import { IntSlackEventStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackEventStateMachine";

describe("IntSlackEvent Comprehensive Domain Test Suite", () => {
  const service = new IntSlackEventService();
  const sm = new IntSlackEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackEvent Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
