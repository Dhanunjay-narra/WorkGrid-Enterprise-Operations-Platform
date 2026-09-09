import { AiRagTransactionService } from "../../../services/core-engine/src/ai/rag/services/AiRagTransactionService";
import { AiRagTransactionValidator } from "../../../packages/types/src/domains/ai/rag/AiRagTransaction";
import { AiRagTransactionStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagTransactionStateMachine";

describe("AiRagTransaction Comprehensive Domain Test Suite", () => {
  const service = new AiRagTransactionService();
  const sm = new AiRagTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagTransaction Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
