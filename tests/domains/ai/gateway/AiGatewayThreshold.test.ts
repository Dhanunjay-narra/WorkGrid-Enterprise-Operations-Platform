import { AiGatewayThresholdService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayThresholdService";
import { AiGatewayThresholdValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayThreshold";
import { AiGatewayThresholdStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayThresholdStateMachine";

describe("AiGatewayThreshold Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayThresholdService();
  const sm = new AiGatewayThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayThreshold Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
