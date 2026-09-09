import { AiMemoryMetricService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryMetricService";
import { AiMemoryMetricValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryMetric";
import { AiMemoryMetricStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryMetricStateMachine";

describe("AiMemoryMetric Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryMetricService();
  const sm = new AiMemoryMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryMetric Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
