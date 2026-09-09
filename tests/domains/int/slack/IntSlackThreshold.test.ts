import { IntSlackThresholdService } from "../../../services/core-engine/src/int/slack/services/IntSlackThresholdService";
import { IntSlackThresholdValidator } from "../../../packages/types/src/domains/int/slack/IntSlackThreshold";
import { IntSlackThresholdStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackThresholdStateMachine";

describe("IntSlackThreshold Comprehensive Domain Test Suite", () => {
  const service = new IntSlackThresholdService();
  const sm = new IntSlackThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackThreshold Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
