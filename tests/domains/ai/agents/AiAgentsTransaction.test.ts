import { AiAgentsTransactionService } from "../../../services/core-engine/src/ai/agents/services/AiAgentsTransactionService";
import { AiAgentsTransactionValidator } from "../../../packages/types/src/domains/ai/agents/AiAgentsTransaction";
import { AiAgentsTransactionStateMachine } from "../../../services/core-engine/src/ai/agents/state-machines/AiAgentsTransactionStateMachine";

describe("AiAgentsTransaction Comprehensive Domain Test Suite", () => {
  const service = new AiAgentsTransactionService();
  const sm = new AiAgentsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiAgentsTransaction Instance",
      domain: "ai_agents",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiAgentsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
