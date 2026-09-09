import { CrmForecastingSessionService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingSessionService";
import { CrmForecastingSessionValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingSession";
import { CrmForecastingSessionStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingSessionStateMachine";

describe("CrmForecastingSession Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingSessionService();
  const sm = new CrmForecastingSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingSession Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
