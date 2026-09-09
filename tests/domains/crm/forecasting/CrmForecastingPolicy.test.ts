import { CrmForecastingPolicyService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingPolicyService";
import { CrmForecastingPolicyValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingPolicy";
import { CrmForecastingPolicyStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingPolicyStateMachine";

describe("CrmForecastingPolicy Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingPolicyService();
  const sm = new CrmForecastingPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingPolicy Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
