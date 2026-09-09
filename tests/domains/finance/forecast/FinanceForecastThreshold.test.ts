import { FinanceForecastThresholdService } from "../../../services/core-engine/src/finance/forecast/services/FinanceForecastThresholdService";
import { FinanceForecastThresholdValidator } from "../../../packages/types/src/domains/finance/forecast/FinanceForecastThreshold";
import { FinanceForecastThresholdStateMachine } from "../../../services/core-engine/src/finance/forecast/state-machines/FinanceForecastThresholdStateMachine";

describe("FinanceForecastThreshold Comprehensive Domain Test Suite", () => {
  const service = new FinanceForecastThresholdService();
  const sm = new FinanceForecastThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceForecastThreshold Instance",
      domain: "finance_forecast",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceForecastThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
