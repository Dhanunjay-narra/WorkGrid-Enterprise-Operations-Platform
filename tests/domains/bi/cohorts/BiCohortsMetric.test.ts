import { BiCohortsMetricService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsMetricService";
import { BiCohortsMetricValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsMetric";
import { BiCohortsMetricStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsMetricStateMachine";

describe("BiCohortsMetric Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsMetricService();
  const sm = new BiCohortsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsMetric Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
