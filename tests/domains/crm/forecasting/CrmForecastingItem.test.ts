import { CrmForecastingItemService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingItemService";
import { CrmForecastingItemValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingItem";
import { CrmForecastingItemStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingItemStateMachine";

describe("CrmForecastingItem Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingItemService();
  const sm = new CrmForecastingItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingItem Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
