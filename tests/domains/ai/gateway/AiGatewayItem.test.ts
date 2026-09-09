import { AiGatewayItemService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayItemService";
import { AiGatewayItemValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayItem";
import { AiGatewayItemStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayItemStateMachine";

describe("AiGatewayItem Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayItemService();
  const sm = new AiGatewayItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayItem Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
