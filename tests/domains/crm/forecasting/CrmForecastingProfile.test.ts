import { CrmForecastingProfileService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingProfileService";
import { CrmForecastingProfileValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingProfile";
import { CrmForecastingProfileStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingProfileStateMachine";

describe("CrmForecastingProfile Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingProfileService();
  const sm = new CrmForecastingProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingProfile Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
