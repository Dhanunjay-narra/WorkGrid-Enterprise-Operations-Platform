import { IntOauthMetricService } from "../../../services/core-engine/src/int/oauth/services/IntOauthMetricService";
import { IntOauthMetricValidator } from "../../../packages/types/src/domains/int/oauth/IntOauthMetric";
import { IntOauthMetricStateMachine } from "../../../services/core-engine/src/int/oauth/state-machines/IntOauthMetricStateMachine";

describe("IntOauthMetric Comprehensive Domain Test Suite", () => {
  const service = new IntOauthMetricService();
  const sm = new IntOauthMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntOauthMetric Instance",
      domain: "int_oauth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntOauthMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
