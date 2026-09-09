import { SupportKnowledgeMappingService } from "../../../services/core-engine/src/support/knowledge/services/SupportKnowledgeMappingService";
import { SupportKnowledgeMappingValidator } from "../../../packages/types/src/domains/support/knowledge/SupportKnowledgeMapping";
import { SupportKnowledgeMappingStateMachine } from "../../../services/core-engine/src/support/knowledge/state-machines/SupportKnowledgeMappingStateMachine";

describe("SupportKnowledgeMapping Comprehensive Domain Test Suite", () => {
  const service = new SupportKnowledgeMappingService();
  const sm = new SupportKnowledgeMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportKnowledgeMapping Instance",
      domain: "support_knowledge",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportKnowledgeMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
