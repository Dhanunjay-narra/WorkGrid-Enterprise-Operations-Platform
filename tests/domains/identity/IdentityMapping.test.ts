import { IdentityMappingService } from "../../../services/core-engine/src/identity/services/IdentityMappingService";
import { IdentityMappingValidator } from "../../../packages/types/src/domains/identity/IdentityMapping";
import { IdentityMappingStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityMappingStateMachine";

describe("IdentityMapping Comprehensive Domain Test Suite", () => {
  const service = new IdentityMappingService();
  const sm = new IdentityMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityMapping Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
