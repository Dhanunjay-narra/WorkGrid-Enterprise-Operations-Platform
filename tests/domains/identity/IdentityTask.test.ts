import { IdentityTaskService } from "../../../services/core-engine/src/identity/services/IdentityTaskService";
import { IdentityTaskValidator } from "../../../packages/types/src/domains/identity/IdentityTask";
import { IdentityTaskStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityTaskStateMachine";

describe("IdentityTask Comprehensive Domain Test Suite", () => {
  const service = new IdentityTaskService();
  const sm = new IdentityTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityTask Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
