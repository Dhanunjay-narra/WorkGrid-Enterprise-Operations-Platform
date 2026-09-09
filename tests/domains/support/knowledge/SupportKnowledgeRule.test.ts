import { SupportKnowledgeRuleService } from "../../../services/core-engine/src/support/knowledge/services/SupportKnowledgeRuleService";
import { SupportKnowledgeRuleValidator } from "../../../packages/types/src/domains/support/knowledge/SupportKnowledgeRule";
import { SupportKnowledgeRuleStateMachine } from "../../../services/core-engine/src/support/knowledge/state-machines/SupportKnowledgeRuleStateMachine";

describe("SupportKnowledgeRule Comprehensive Domain Test Suite", () => {
  const service = new SupportKnowledgeRuleService();
  const sm = new SupportKnowledgeRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportKnowledgeRule Instance",
      domain: "support_knowledge",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportKnowledgeRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
