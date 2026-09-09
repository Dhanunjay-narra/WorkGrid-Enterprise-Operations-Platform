import { CrmForecastingTransactionService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingTransactionService";
import { CrmForecastingTransactionValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingTransaction";
import { CrmForecastingTransactionStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingTransactionStateMachine";

describe("CrmForecastingTransaction Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingTransactionService();
  const sm = new CrmForecastingTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingTransaction Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
