import { AiGatewaySummaryService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewaySummaryService";
import { AiGatewaySummaryValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewaySummary";
import { AiGatewaySummaryStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewaySummaryStateMachine";

describe("AiGatewaySummary Comprehensive Domain Test Suite", () => {
  const service = new AiGatewaySummaryService();
  const sm = new AiGatewaySummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewaySummary Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewaySummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
