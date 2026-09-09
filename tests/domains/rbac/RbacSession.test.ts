import { RbacSessionService } from "../../../services/core-engine/src/rbac/services/RbacSessionService";
import { RbacSessionValidator } from "../../../packages/types/src/domains/rbac/RbacSession";
import { RbacSessionStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacSessionStateMachine";

describe("RbacSession Comprehensive Domain Test Suite", () => {
  const service = new RbacSessionService();
  const sm = new RbacSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacSession Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
