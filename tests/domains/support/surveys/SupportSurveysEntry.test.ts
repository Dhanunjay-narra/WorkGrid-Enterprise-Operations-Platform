import { SupportSurveysEntryService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysEntryService";
import { SupportSurveysEntryValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysEntry";
import { SupportSurveysEntryStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysEntryStateMachine";

describe("SupportSurveysEntry Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysEntryService();
  const sm = new SupportSurveysEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysEntry Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
