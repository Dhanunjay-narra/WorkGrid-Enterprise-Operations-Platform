import { ObsMetricsRuleService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsRuleService";
import { ObsMetricsRuleValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsRule";
import { ObsMetricsRuleStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsRuleStateMachine";

describe("ObsMetricsRule Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsRuleService();
  const sm = new ObsMetricsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsRule Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
