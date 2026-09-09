import { AuthProfileService } from "../../../services/core-engine/src/auth/services/AuthProfileService";
import { AuthProfileValidator } from "../../../packages/types/src/domains/auth/AuthProfile";
import { AuthProfileStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthProfileStateMachine";

describe("AuthProfile Comprehensive Domain Test Suite", () => {
  const service = new AuthProfileService();
  const sm = new AuthProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthProfile Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
