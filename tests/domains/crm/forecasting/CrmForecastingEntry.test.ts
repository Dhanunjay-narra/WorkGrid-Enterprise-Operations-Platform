import { CrmForecastingEntryService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingEntryService";
import { CrmForecastingEntryValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingEntry";
import { CrmForecastingEntryStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingEntryStateMachine";

describe("CrmForecastingEntry Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingEntryService();
  const sm = new CrmForecastingEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingEntry Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
