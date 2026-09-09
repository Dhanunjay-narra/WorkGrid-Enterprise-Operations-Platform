import { SupportSurveysEventService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysEventService";
import { SupportSurveysEventValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysEvent";
import { SupportSurveysEventStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysEventStateMachine";

describe("SupportSurveysEvent Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysEventService();
  const sm = new SupportSurveysEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysEvent Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
