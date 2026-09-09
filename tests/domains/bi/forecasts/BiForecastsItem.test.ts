import { BiForecastsItemService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsItemService";
import { BiForecastsItemValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsItem";
import { BiForecastsItemStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsItemStateMachine";

describe("BiForecastsItem Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsItemService();
  const sm = new BiForecastsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsItem Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
