import { SupportAgentsNodeService } from "../../../services/core-engine/src/support/agents/services/SupportAgentsNodeService";
import { SupportAgentsNodeValidator } from "../../../packages/types/src/domains/support/agents/SupportAgentsNode";
import { SupportAgentsNodeStateMachine } from "../../../services/core-engine/src/support/agents/state-machines/SupportAgentsNodeStateMachine";

describe("SupportAgentsNode Comprehensive Domain Test Suite", () => {
  const service = new SupportAgentsNodeService();
  const sm = new SupportAgentsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportAgentsNode Instance",
      domain: "support_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportAgentsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
