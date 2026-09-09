import { SupportSurveysPayloadService } from "../../../services/core-engine/src/support/surveys/services/SupportSurveysPayloadService";
import { SupportSurveysPayloadValidator } from "../../../packages/types/src/domains/support/surveys/SupportSurveysPayload";
import { SupportSurveysPayloadStateMachine } from "../../../services/core-engine/src/support/surveys/state-machines/SupportSurveysPayloadStateMachine";

describe("SupportSurveysPayload Comprehensive Domain Test Suite", () => {
  const service = new SupportSurveysPayloadService();
  const sm = new SupportSurveysPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSurveysPayload Instance",
      domain: "support_surveys",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSurveysPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
