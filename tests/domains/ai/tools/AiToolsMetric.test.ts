import { AiToolsMetricService } from "../../../services/core-engine/src/ai/tools/services/AiToolsMetricService";
import { AiToolsMetricValidator } from "../../../packages/types/src/domains/ai/tools/AiToolsMetric";
import { AiToolsMetricStateMachine } from "../../../services/core-engine/src/ai/tools/state-machines/AiToolsMetricStateMachine";

describe("AiToolsMetric Comprehensive Domain Test Suite", () => {
  const service = new AiToolsMetricService();
  const sm = new AiToolsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiToolsMetric Instance",
      domain: "ai_tools",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiToolsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
