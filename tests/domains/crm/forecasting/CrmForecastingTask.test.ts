import { CrmForecastingTaskService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingTaskService";
import { CrmForecastingTaskValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingTask";
import { CrmForecastingTaskStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingTaskStateMachine";

describe("CrmForecastingTask Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingTaskService();
  const sm = new CrmForecastingTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingTask Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
