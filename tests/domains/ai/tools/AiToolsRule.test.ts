import { AiToolsRuleService } from "../../../services/core-engine/src/ai/tools/services/AiToolsRuleService";
import { AiToolsRuleValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsRule";
import { AiToolsRuleStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsRuleStateMachine";

describe("AiToolsRule Comprehensive Domain Test Suite", () => {
  const service = new AiToolsRuleService();
  const sm = new AiToolsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsRule Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
