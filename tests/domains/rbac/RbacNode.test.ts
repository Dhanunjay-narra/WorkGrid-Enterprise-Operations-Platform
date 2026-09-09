import { RbacNodeService } from "../../../services/core-engine/src/rbac/services/RbacNodeService";
import { RbacNodeValidator } from "../../../packages/types/src/domains/rbac/RbacNode";
import { RbacNodeStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacNodeStateMachine";

describe("RbacNode Comprehensive Domain Test Suite", () => {
  const service = new RbacNodeService();
  const sm = new RbacNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacNode Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
