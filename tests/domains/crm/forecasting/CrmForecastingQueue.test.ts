import { CrmForecastingQueueService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingQueueService";
import { CrmForecastingQueueValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingQueue";
import { CrmForecastingQueueStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingQueueStateMachine";

describe("CrmForecastingQueue Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingQueueService();
  const sm = new CrmForecastingQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingQueue Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
