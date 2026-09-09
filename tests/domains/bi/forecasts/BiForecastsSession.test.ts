import { BiForecastsSessionService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsSessionService";
import { BiForecastsSessionValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsSession";
import { BiForecastsSessionStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsSessionStateMachine";

describe("BiForecastsSession Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsSessionService();
  const sm = new BiForecastsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsSession Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
