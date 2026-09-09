import { RbacEventService } from "../../../services/core-engine/src/rbac/services/RbacEventService";
import { RbacEventValidator } from "../../../packages/types/src/domains/rbac/RbacEvent";
import { RbacEventStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacEventStateMachine";

describe("RbacEvent Comprehensive Domain Test Suite", () => {
  const service = new RbacEventService();
  const sm = new RbacEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacEvent Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
