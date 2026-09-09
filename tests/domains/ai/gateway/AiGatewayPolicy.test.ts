import { AiGatewayPolicyService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayPolicyService";
import { AiGatewayPolicyValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayPolicy";
import { AiGatewayPolicyStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayPolicyStateMachine";

describe("AiGatewayPolicy Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayPolicyService();
  const sm = new AiGatewayPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayPolicy Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
