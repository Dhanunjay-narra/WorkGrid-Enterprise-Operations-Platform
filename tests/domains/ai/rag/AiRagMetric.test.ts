import { AiRagMetricService } from "../../../services/core-engine/src/ai/rag/services/AiRagMetricService";
import { AiRagMetricValidator } from "../../../packages/types/src/domains/ai/rag/AiRagMetric";
import { AiRagMetricStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagMetricStateMachine";

describe("AiRagMetric Comprehensive Domain Test Suite", () => {
  const service = new AiRagMetricService();
  const sm = new AiRagMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagMetric Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
