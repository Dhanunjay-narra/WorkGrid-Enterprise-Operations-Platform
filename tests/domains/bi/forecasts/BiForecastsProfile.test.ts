import { BiForecastsProfileService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsProfileService";
import { BiForecastsProfileValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsProfile";
import { BiForecastsProfileStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsProfileStateMachine";

describe("BiForecastsProfile Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsProfileService();
  const sm = new BiForecastsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsProfile Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
