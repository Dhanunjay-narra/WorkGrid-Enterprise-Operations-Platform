import { AiGatewayTransactionService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayTransactionService";
import { AiGatewayTransactionValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayTransaction";
import { AiGatewayTransactionStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayTransactionStateMachine";

describe("AiGatewayTransaction Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayTransactionService();
  const sm = new AiGatewayTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayTransaction Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
