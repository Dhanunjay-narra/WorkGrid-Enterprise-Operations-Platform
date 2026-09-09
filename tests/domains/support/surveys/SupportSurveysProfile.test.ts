import { SupportSurveysProfileService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysProfileService";
import { SupportSurveysProfileValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysProfile";
import { SupportSurveysProfileStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysProfileStateMachine";

describe("SupportSurveysProfile Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysProfileService();
  const sm = new SupportSurveysProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysProfile Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
