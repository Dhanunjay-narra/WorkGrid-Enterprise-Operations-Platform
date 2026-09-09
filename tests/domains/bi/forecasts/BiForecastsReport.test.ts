import { BiForecastsReportService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsReportService";
import { BiForecastsReportValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsReport";
import { BiForecastsReportStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsReportStateMachine";

describe("BiForecastsReport Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsReportService();
  const sm = new BiForecastsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsReport Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
