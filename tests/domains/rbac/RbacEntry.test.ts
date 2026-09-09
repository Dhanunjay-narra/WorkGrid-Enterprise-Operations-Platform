import { RbacEntryService } from "../../../services/core-engine/src/rbac/services/RbacEntryService";
import { RbacEntryValidator } from "../../../packages/types/src/domains/rbac/RbacEntry";
import { RbacEntryStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacEntryStateMachine";

describe("RbacEntry Comprehensive Domain Test Suite", () => {
  const service = new RbacEntryService();
  const sm = new RbacEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacEntry Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
