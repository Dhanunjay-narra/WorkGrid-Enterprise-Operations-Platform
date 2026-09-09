import { IntOauthSummaryService } from "../../../services/core-engine/src/int/oauth/services/IntOauthSummaryService";
import { IntOauthSummaryValidator } from "../../../packages/types/src/domains/int/oauth/IntOauthSummary";
import { IntOauthSummaryStateMachine } from "../../../services/core-engine/src/int/oauth/state-machines/IntOauthSummaryStateMachine";

describe("IntOauthSummary Comprehensive Domain Test Suite", () => {
  const service = new IntOauthSummaryService();
  const sm = new IntOauthSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntOauthSummary Instance",
      domain: "int_oauth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntOauthSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
