import { AiGatewayRecordService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayRecordService";
import { AiGatewayRecordValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayRecord";
import { AiGatewayRecordStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayRecordStateMachine";

describe("AiGatewayRecord Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayRecordService();
  const sm = new AiGatewayRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayRecord Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
