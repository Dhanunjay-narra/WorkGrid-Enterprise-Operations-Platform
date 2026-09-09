import { IdentitySessionService } from "../../../services/core-engine/src/identity/services/IdentitySessionService";
import { IdentitySessionValidator } from "../../../packages/types/src/domains/identity/IdentitySession";
import { IdentitySessionStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentitySessionStateMachine";

describe("IdentitySession Comprehensive Domain Test Suite", () => {
  const service = new IdentitySessionService();
  const sm = new IdentitySessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentitySession Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentitySessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
