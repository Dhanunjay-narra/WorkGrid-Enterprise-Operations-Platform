import { AiRagConfigService } from "../../../services/core-engine/src/ai/rag/services/AiRagConfigService";
import { AiRagConfigValidator } from "../../../packages/types/src/domains/ai/rag/AiRagConfig";
import { AiRagConfigStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagConfigStateMachine";

describe("AiRagConfig Comprehensive Domain Test Suite", () => {
  const service = new AiRagConfigService();
  const sm = new AiRagConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagConfig Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
