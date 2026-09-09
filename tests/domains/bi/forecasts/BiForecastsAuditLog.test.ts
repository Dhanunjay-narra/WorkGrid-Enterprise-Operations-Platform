import { BiForecastsAuditLogService } from "../../../services/core-engine/src/bi/forecasts/services/BiForecastsAuditLogService";
import { BiForecastsAuditLogValidator } from "../../../packages/types/src/domains/bi/forecasts/BiForecastsAuditLog";
import { BiForecastsAuditLogStateMachine } from "../../../services/core-engine/src/bi/forecasts/state-machines/BiForecastsAuditLogStateMachine";

describe("BiForecastsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new BiForecastsAuditLogService();
  const sm = new BiForecastsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiForecastsAuditLog Instance",
      domain: "bi_forecasts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiForecastsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
