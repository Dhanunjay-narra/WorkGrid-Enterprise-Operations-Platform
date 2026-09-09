import { SupportAgentsMetricService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsMetricService";
import { SupportAgentsMetricValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsMetric";
import { SupportAgentsMetricStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsMetricStateMachine";

describe("SupportAgentsMetric Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsMetricService();
  const sm = new SupportAgentsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsMetric Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
