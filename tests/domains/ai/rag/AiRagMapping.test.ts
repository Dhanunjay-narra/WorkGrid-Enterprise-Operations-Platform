import { AiRagMappingService } from "../../../services/core-engine/src/ai/rag/services/AiRagMappingService";
import { AiRagMappingValidator } from "../../../packages/types/src/domains/ai/rag/AiRagMapping";
import { AiRagMappingStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagMappingStateMachine";

describe("AiRagMapping Comprehensive Domain Test Suite", () => {
  const service = new AiRagMappingService();
  const sm = new AiRagMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagMapping Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
