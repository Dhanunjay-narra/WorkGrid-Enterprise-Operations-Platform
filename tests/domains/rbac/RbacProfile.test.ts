import { RbacProfileService } from "../../../services/core-engine/src/rbac/services/RbacProfileService";
import { RbacProfileValidator } from "../../../packages/types/src/domains/rbac/RbacProfile";
import { RbacProfileStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacProfileStateMachine";

describe("RbacProfile Comprehensive Domain Test Suite", () => {
  const service = new RbacProfileService();
  const sm = new RbacProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacProfile Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
