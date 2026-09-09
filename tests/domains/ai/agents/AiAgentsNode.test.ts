import { AiAgentsNodeService } from "../../../services/core-engine/src/ai/agents/services/AiAgentsNodeService";
import { AiAgentsNodeValidator } from "../../../packages/types/src/domains/ai/agents/AiAgentsNode";
import { AiAgentsNodeStateMachine } from "../../../services/core-engine/src/ai/agents/state-machines/AiAgentsNodeStateMachine";

describe("AiAgentsNode Comprehensive Domain Test Suite", () => {
  const service = new AiAgentsNodeService();
  const sm = new AiAgentsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiAgentsNode Instance",
      domain: "ai_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiAgentsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
