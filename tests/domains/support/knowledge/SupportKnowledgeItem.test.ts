import { SupportKnowledgeItemService } from "../../../services/core-engine/src/support/knowledge/services/SupportKnowledgeItemService";
import { SupportKnowledgeItemValidator } from "../../../packages/types/src/domains/support/knowledge/SupportKnowledgeItem";
import { SupportKnowledgeItemStateMachine } from "../../../services/core-engine/src/support/knowledge/state-machines/SupportKnowledgeItemStateMachine";

describe("SupportKnowledgeItem Comprehensive Domain Test Suite", () => {
  const service = new SupportKnowledgeItemService();
  const sm = new SupportKnowledgeItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportKnowledgeItem Instance",
      domain: "support_knowledge",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportKnowledgeItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
