import { AiRagPayloadService } from "../../../services/core-engine/src/ai/rag/services/AiRagPayloadService";
import { AiRagPayloadValidator } from "../../../packages/types/src/domains/ai/rag/AiRagPayload";
import { AiRagPayloadStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagPayloadStateMachine";

describe("AiRagPayload Comprehensive Domain Test Suite", () => {
  const service = new AiRagPayloadService();
  const sm = new AiRagPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagPayload Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
