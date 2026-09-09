import { IdentityEventService } from "../../../services/core-engine/src/identity/services/IdentityEventService";
import { IdentityEventValidator } from "../../../packages/types/src/domains/identity/IdentityEvent";
import { IdentityEventStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityEventStateMachine";

describe("IdentityEvent Comprehensive Domain Test Suite", () => {
  const service = new IdentityEventService();
  const sm = new IdentityEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityEvent Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
