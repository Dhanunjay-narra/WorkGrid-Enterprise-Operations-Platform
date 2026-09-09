import { IdentityItemService } from "../../../services/core-engine/src/identity/services/IdentityItemService";
import { IdentityItemValidator } from "../../../packages/types/src/domains/identity/IdentityItem";
import { IdentityItemStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityItemStateMachine";

describe("IdentityItem Comprehensive Domain Test Suite", () => {
  const service = new IdentityItemService();
  const sm = new IdentityItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityItem Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
