import { AiRagStateService } from "../../../services/core-engine/src/ai/rag/services/AiRagStateService";
import { AiRagStateValidator } from "../../../packages/types/src/domains/ai/rag/AiRagState";
import { AiRagStateStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagStateStateMachine";

describe("AiRagState Comprehensive Domain Test Suite", () => {
  const service = new AiRagStateService();
  const sm = new AiRagStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagState Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
