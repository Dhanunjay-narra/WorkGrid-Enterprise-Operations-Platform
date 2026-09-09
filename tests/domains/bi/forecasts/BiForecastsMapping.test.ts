import { BiForecastsMappingService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsMappingService";
import { BiForecastsMappingValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsMapping";
import { BiForecastsMappingStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsMappingStateMachine";

describe("BiForecastsMapping Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsMappingService();
  const sm = new BiForecastsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsMapping Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
