import { BiForecastsMetricService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsMetricService";
import { BiForecastsMetricValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsMetric";
import { BiForecastsMetricStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsMetricStateMachine";

describe("BiForecastsMetric Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsMetricService();
  const sm = new BiForecastsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsMetric Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
