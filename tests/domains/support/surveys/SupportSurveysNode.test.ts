import { SupportSurveysNodeService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysNodeService";
import { SupportSurveysNodeValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysNode";
import { SupportSurveysNodeStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysNodeStateMachine";

describe("SupportSurveysNode Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysNodeService();
  const sm = new SupportSurveysNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysNode Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
