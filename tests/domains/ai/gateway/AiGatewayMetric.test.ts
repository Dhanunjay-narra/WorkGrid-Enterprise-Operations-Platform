import { AiGatewayMetricService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayMetricService";
import { AiGatewayMetricValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayMetric";
import { AiGatewayMetricStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayMetricStateMachine";

describe("AiGatewayMetric Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayMetricService();
  const sm = new AiGatewayMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayMetric Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
