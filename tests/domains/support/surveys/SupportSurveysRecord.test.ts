import { SupportSurveysRecordService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysRecordService";
import { SupportSurveysRecordValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysRecord";
import { SupportSurveysRecordStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysRecordStateMachine";

describe("SupportSurveysRecord Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysRecordService();
  const sm = new SupportSurveysRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysRecord Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
