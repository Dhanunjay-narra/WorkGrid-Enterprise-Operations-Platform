import { FinanceForecastTransactionService } from "../../../services/core-engine/src/finance/forecast/services/FinanceForecastTransactionService";
import { FinanceForecastTransactionValidator } from "../../../packages/types/src/domains/finance/forecast/FinanceForecastTransaction";
import { FinanceForecastTransactionStateMachine } from "../../../services/core-engine/src/finance/forecast/state-machines/FinanceForecastTransactionStateMachine";

describe("FinanceForecastTransaction Comprehensive Domain Test Suite", () => {
  const service = new FinanceForecastTransactionService();
  const sm = new FinanceForecastTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceForecastTransaction Instance",
      domain: "finance_forecast",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceForecastTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
