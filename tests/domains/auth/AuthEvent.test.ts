import { AuthEventService } from "../../../services/core-engine/src/auth/services/AuthEventService";
import { AuthEventValidator } from "../../../packages/types/src/domains/auth/AuthEvent";
import { AuthEventStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthEventStateMachine";

describe("AuthEvent Comprehensive Domain Test Suite", () => {
  const service = new AuthEventService();
  const sm = new AuthEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthEvent Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
