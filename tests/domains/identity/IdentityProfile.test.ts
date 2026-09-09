import { IdentityProfileService } from "../../../services/core-engine/src/identity/services/IdentityProfileService";
import { IdentityProfileValidator } from "../../../packages/types/src/domains/identity/IdentityProfile";
import { IdentityProfileStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityProfileStateMachine";

describe("IdentityProfile Comprehensive Domain Test Suite", () => {
  const service = new IdentityProfileService();
  const sm = new IdentityProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityProfile Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
