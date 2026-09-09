import { CrmForecastingRuleService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingRuleService";
import { CrmForecastingRuleValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingRule";
import { CrmForecastingRuleStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingRuleStateMachine";

describe("CrmForecastingRule Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingRuleService();
  const sm = new CrmForecastingRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingRule Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
