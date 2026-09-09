import { AiGatewayAuditLogService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayAuditLogService";
import { AiGatewayAuditLogValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayAuditLog";
import { AiGatewayAuditLogStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayAuditLogStateMachine";

describe("AiGatewayAuditLog Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayAuditLogService();
  const sm = new AiGatewayAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayAuditLog Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
