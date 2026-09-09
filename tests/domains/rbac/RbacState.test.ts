import { RbacStateService } from "../../../services/core-engine/src/rbac/services/RbacStateService";
import { RbacStateValidator } from "../../../packages/types/src/domains/rbac/RbacState";
import { RbacStateStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacStateStateMachine";

describe("RbacState Comprehensive Domain Test Suite", () => {
  const service = new RbacStateService();
  const sm = new RbacStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacState Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
