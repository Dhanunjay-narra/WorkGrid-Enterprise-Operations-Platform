import { CrmForecastingPayloadService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingPayloadService";
import { CrmForecastingPayloadValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingPayload";
import { CrmForecastingPayloadStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingPayloadStateMachine";

describe("CrmForecastingPayload Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingPayloadService();
  const sm = new CrmForecastingPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingPayload Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
