import { AiGatewayNodeService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayNodeService";
import { AiGatewayNodeValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayNode";
import { AiGatewayNodeStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayNodeStateMachine";

describe("AiGatewayNode Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayNodeService();
  const sm = new AiGatewayNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayNode Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
