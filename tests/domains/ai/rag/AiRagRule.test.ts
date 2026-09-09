import { AiRagRuleService } from "../../../services/core-engine/src/ai/rag/services/AiRagRuleService";
import { AiRagRuleValidator } from "../../../packages/types/src/domains/ai/rag/AiRagRule";
import { AiRagRuleStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagRuleStateMachine";

describe("AiRagRule Comprehensive Domain Test Suite", () => {
  const service = new AiRagRuleService();
  const sm = new AiRagRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagRule Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
