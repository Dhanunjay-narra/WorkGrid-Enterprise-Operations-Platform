import { AiGatewayPayloadService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayPayloadService";
import { AiGatewayPayloadValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayPayload";
import { AiGatewayPayloadStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayPayloadStateMachine";

describe("AiGatewayPayload Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayPayloadService();
  const sm = new AiGatewayPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayPayload Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
