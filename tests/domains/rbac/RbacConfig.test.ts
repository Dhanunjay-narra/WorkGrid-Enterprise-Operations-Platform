import { RbacConfigService } from "../../../services/core-engine/src/rbac/services/RbacConfigService";
import { RbacConfigValidator } from "../../../packages/types/src/domains/rbac/RbacConfig";
import { RbacConfigStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacConfigStateMachine";

describe("RbacConfig Comprehensive Domain Test Suite", () => {
  const service = new RbacConfigService();
  const sm = new RbacConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacConfig Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
