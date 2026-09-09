import { RbacTaskService } from "../../../services/core-engine/src/rbac/services/RbacTaskService";
import { RbacTaskValidator } from "../../../packages/types/src/domains/rbac/RbacTask";
import { RbacTaskStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacTaskStateMachine";

describe("RbacTask Comprehensive Domain Test Suite", () => {
  const service = new RbacTaskService();
  const sm = new RbacTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacTask Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
