import { SupportSurveysMetricService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysMetricService";
import { SupportSurveysMetricValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysMetric";
import { SupportSurveysMetricStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysMetricStateMachine";

describe("SupportSurveysMetric Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysMetricService();
  const sm = new SupportSurveysMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysMetric Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
