import { IntSlackMetricService } from "../../../services/core-engine/src/int/slack/services/IntSlackMetricService";
import { IntSlackMetricValidator } from "../../../packages/types/src/domains/int/slack/IntSlackMetric";
import { IntSlackMetricStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackMetricStateMachine";

describe("IntSlackMetric Comprehensive Domain Test Suite", () => {
  const service = new IntSlackMetricService();
  const sm = new IntSlackMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackMetric Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
