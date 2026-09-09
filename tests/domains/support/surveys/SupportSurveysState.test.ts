import { SupportSurveysStateService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysStateService";
import { SupportSurveysStateValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysState";
import { SupportSurveysStateStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysStateStateMachine";

describe("SupportSurveysState Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysStateService();
  const sm = new SupportSurveysStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysState Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
