import { AiRagSessionService } from "../../../services/core-engine/src/ai/rag/services/AiRagSessionService";
import { AiRagSessionValidator } from "../../../packages/types/src/domains/ai/rag/AiRagSession";
import { AiRagSessionStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagSessionStateMachine";

describe("AiRagSession Comprehensive Domain Test Suite", () => {
  const service = new AiRagSessionService();
  const sm = new AiRagSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagSession Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
