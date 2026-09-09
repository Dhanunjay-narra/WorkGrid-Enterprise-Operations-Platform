import { BiForecastsSummaryService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsSummaryService";
import { BiForecastsSummaryValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsSummary";
import { BiForecastsSummaryStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsSummaryStateMachine";

describe("BiForecastsSummary Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsSummaryService();
  const sm = new BiForecastsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsSummary Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
