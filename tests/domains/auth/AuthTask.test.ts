import { AuthTaskService } from "../../../services/core-engine/src/auth/services/AuthTaskService";
import { AuthTaskValidator } from "../../../packages/types/src/domains/auth/AuthTask";
import { AuthTaskStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthTaskStateMachine";

describe("AuthTask Comprehensive Domain Test Suite", () => {
  const service = new AuthTaskService();
  const sm = new AuthTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthTask Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
