import { BiForecastsNodeService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsNodeService";
import { BiForecastsNodeValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsNode";
import { BiForecastsNodeStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsNodeStateMachine";

describe("BiForecastsNode Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsNodeService();
  const sm = new BiForecastsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsNode Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
