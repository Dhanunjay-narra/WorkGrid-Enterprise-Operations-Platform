import { CrmForecastingMetricService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingMetricService";
import { CrmForecastingMetricValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingMetric";
import { CrmForecastingMetricStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingMetricStateMachine";

describe("CrmForecastingMetric Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingMetricService();
  const sm = new CrmForecastingMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingMetric Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
