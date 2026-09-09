import { IdentityStateService } from "../../../services/core-engine/src/identity/services/IdentityStateService";
import { IdentityStateValidator } from "../../../packages/types/src/domains/identity/IdentityState";
import { IdentityStateStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityStateStateMachine";

describe("IdentityState Comprehensive Domain Test Suite", () => {
  const service = new IdentityStateService();
  const sm = new IdentityStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityState Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
