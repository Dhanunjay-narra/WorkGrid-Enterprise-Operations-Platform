import { AiAgentsMappingService } from "../../../services/core-engine/src/ai/agents/services/AiAgentsMappingService";
import { AiAgentsMappingValidator } from "../../../packages/types/src/domains/ai/agents/AiAgentsMapping";
import { AiAgentsMappingStateMachine } from "../../../services/core-engine/src/ai/agents/state-machines/AiAgentsMappingStateMachine";

describe("AiAgentsMapping Comprehensive Domain Test Suite", () => {
  const service = new AiAgentsMappingService();
  const sm = new AiAgentsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiAgentsMapping Instance",
      domain: "ai_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiAgentsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
