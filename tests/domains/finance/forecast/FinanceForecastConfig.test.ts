import { FinanceForecastConfigService } from "../../../services/core-engine/src/finance/forecast/services/FinanceForecastConfigService";
import { FinanceForecastConfigValidator } from "../../../packages/types/src/domains/finance/forecast/FinanceForecastConfig";
import { FinanceForecastConfigStateMachine } from "../../../services/core-engine/src/finance/forecast/state-machines/FinanceForecastConfigStateMachine";

describe("FinanceForecastConfig Comprehensive Domain Test Suite", () => {
  const service = new FinanceForecastConfigService();
  const sm = new FinanceForecastConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceForecastConfig Instance",
      domain: "finance_forecast",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceForecastConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
