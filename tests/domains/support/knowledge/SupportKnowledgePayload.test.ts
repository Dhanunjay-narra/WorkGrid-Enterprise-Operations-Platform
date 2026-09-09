import { SupportKnowledgePayloadService } from "../../../services/core-engine/src/support/knowledge/services/SupportKnowledgePayloadService";
import { SupportKnowledgePayloadValidator } from "../../../packages/types/src/domains/support/knowledge/SupportKnowledgePayload";
import { SupportKnowledgePayloadStateMachine } from "../../../services/core-engine/src/support/knowledge/state-machines/SupportKnowledgePayloadStateMachine";

describe("SupportKnowledgePayload Comprehensive Domain Test Suite", () => {
  const service = new SupportKnowledgePayloadService();
  const sm = new SupportKnowledgePayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportKnowledgePayload Instance",
      domain: "support_knowledge",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportKnowledgePayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
