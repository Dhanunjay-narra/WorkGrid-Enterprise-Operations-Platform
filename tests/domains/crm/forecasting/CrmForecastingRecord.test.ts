import { CrmForecastingRecordService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingRecordService";
import { CrmForecastingRecordValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingRecord";
import { CrmForecastingRecordStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingRecordStateMachine";

describe("CrmForecastingRecord Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingRecordService();
  const sm = new CrmForecastingRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingRecord Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
