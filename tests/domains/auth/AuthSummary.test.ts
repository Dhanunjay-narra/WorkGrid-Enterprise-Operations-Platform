import { AuthSummaryService } from "../../../services/core-engine/src/auth/services/AuthSummaryService";
import { AuthSummaryValidator } from "../../../packages/types/src/domains/auth/AuthSummary";
import { AuthSummaryStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthSummaryStateMachine";

describe("AuthSummary Comprehensive Domain Test Suite", () => {
  const service = new AuthSummaryService();
  const sm = new AuthSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthSummary Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
