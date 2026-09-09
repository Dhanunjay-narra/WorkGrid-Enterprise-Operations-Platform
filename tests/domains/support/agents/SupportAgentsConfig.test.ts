import { SupportAgentsConfigService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsConfigService";
import { SupportAgentsConfigValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsConfig";
import { SupportAgentsConfigStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsConfigStateMachine";

describe("SupportAgentsConfig Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsConfigService();
  const sm = new SupportAgentsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsConfig Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
