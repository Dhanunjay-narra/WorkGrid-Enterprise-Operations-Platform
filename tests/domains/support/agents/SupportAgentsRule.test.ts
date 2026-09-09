import { SupportAgentsRuleService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsRuleService";
import { SupportAgentsRuleValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsRule";
import { SupportAgentsRuleStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsRuleStateMachine";

describe("SupportAgentsRule Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsRuleService();
  const sm = new SupportAgentsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsRule Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
