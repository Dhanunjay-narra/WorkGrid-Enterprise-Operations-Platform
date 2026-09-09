import { AiGatewayScheduleService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayScheduleService";
import { AiGatewayScheduleValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewaySchedule";
import { AiGatewayScheduleStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayScheduleStateMachine";

describe("AiGatewaySchedule Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayScheduleService();
  const sm = new AiGatewayScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewaySchedule Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
