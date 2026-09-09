import { AiGatewayStateService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayStateService";
import { AiGatewayStateValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayState";
import { AiGatewayStateStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayStateStateMachine";

describe("AiGatewayState Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayStateService();
  const sm = new AiGatewayStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayState Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
