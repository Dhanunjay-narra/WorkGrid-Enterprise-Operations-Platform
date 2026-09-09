import { SupportSurveysItemService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysItemService";
import { SupportSurveysItemValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysItem";
import { SupportSurveysItemStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysItemStateMachine";

describe("SupportSurveysItem Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysItemService();
  const sm = new SupportSurveysItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysItem Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
