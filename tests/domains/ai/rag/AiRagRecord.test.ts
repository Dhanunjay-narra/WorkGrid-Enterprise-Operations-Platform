import { AiRagRecordService } from "../../../services/core-engine/src/ai/rag/services/AiRagRecordService";
import { AiRagRecordValidator } from "../../../packages/types/src/domains/ai/rag/AiRagRecord";
import { AiRagRecordStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagRecordStateMachine";

describe("AiRagRecord Comprehensive Domain Test Suite", () => {
  const service = new AiRagRecordService();
  const sm = new AiRagRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagRecord Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
