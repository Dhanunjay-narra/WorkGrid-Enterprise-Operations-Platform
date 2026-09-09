import { SupportSurveysAssignmentService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysAssignmentService";
import { SupportSurveysAssignmentValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysAssignment";
import { SupportSurveysAssignmentStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysAssignmentStateMachine";

describe("SupportSurveysAssignment Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysAssignmentService();
  const sm = new SupportSurveysAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysAssignment Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
