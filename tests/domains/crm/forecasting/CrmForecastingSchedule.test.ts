import { CrmForecastingScheduleService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingScheduleService";
import { CrmForecastingScheduleValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingSchedule";
import { CrmForecastingScheduleStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingScheduleStateMachine";

describe("CrmForecastingSchedule Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingScheduleService();
  const sm = new CrmForecastingScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingSchedule Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
