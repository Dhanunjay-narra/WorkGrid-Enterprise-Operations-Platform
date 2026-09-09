import { CrmForecastingThresholdService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingThresholdService";
import { CrmForecastingThresholdValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingThreshold";
import { CrmForecastingThresholdStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingThresholdStateMachine";

describe("CrmForecastingThreshold Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingThresholdService();
  const sm = new CrmForecastingThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingThreshold Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
