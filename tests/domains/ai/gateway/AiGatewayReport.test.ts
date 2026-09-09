import { AiGatewayReportService } from "../../../services/core-engine/src/ai/gateway/services/AiGatewayReportService";
import { AiGatewayReportValidator } from "../../../packages/types/src/domains/ai/gateway/AiGatewayReport";
import { AiGatewayReportStateMachine } from "../../../services/core-engine/src/ai/gateway/state-machines/AiGatewayReportStateMachine";

describe("AiGatewayReport Comprehensive Domain Test Suite", () => {
  const service = new AiGatewayReportService();
  const sm = new AiGatewayReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiGatewayReport Instance",
      domain: "ai_gateway",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiGatewayReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
