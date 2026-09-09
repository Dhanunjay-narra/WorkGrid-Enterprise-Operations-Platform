import { RbacMappingService } from "../../../services/core-engine/src/rbac/services/RbacMappingService";
import { RbacMappingValidator } from "../../../packages/types/src/domains/rbac/RbacMapping";
import { RbacMappingStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacMappingStateMachine";

describe("RbacMapping Comprehensive Domain Test Suite", () => {
  const service = new RbacMappingService();
  const sm = new RbacMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacMapping Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
