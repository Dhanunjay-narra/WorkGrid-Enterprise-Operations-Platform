import { ObsSpansMetricService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansMetricService";
import { ObsSpansMetricValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansMetric";
import { ObsSpansMetricStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansMetricStateMachine";

describe("ObsSpansMetric Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansMetricService();
  const sm = new ObsSpansMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansMetric Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
