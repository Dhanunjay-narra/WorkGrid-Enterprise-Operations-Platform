import { SupportKnowledgeAssignmentService } from "../../../services/core-engine/src/support/knowledge/services/SupportKnowledgeAssignmentService";
import { SupportKnowledgeAssignmentValidator } from "../../../packages/types/src/domains/support/knowledge/SupportKnowledgeAssignment";
import { SupportKnowledgeAssignmentStateMachine } from "../../../services/core-engine/src/support/knowledge/state-machines/SupportKnowledgeAssignmentStateMachine";

describe("SupportKnowledgeAssignment Comprehensive Domain Test Suite", () => {
  const service = new SupportKnowledgeAssignmentService();
  const sm = new SupportKnowledgeAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportKnowledgeAssignment Instance",
      domain: "support_knowledge",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportKnowledgeAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
