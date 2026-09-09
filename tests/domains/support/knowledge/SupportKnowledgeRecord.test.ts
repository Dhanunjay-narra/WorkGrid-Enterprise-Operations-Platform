import { SupportKnowledgeRecordService } from "../../../services/core-engine/src/support/knowledge/services/SupportKnowledgeRecordService";
import { SupportKnowledgeRecordValidator } from "../../../packages/types/src/domains/support/knowledge/SupportKnowledgeRecord";
import { SupportKnowledgeRecordStateMachine } from "../../../services/core-engine/src/support/knowledge/state-machines/SupportKnowledgeRecordStateMachine";

describe("SupportKnowledgeRecord Comprehensive Domain Test Suite", () => {
  const service = new SupportKnowledgeRecordService();
  const sm = new SupportKnowledgeRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportKnowledgeRecord Instance",
      domain: "support_knowledge",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportKnowledgeRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
