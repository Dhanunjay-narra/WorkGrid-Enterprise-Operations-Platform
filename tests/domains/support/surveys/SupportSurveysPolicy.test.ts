import { SupportSurveysPolicyService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysPolicyService";
import { SupportSurveysPolicyValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysPolicy";
import { SupportSurveysPolicyStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysPolicyStateMachine";

describe("SupportSurveysPolicy Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysPolicyService();
  const sm = new SupportSurveysPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysPolicy Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
