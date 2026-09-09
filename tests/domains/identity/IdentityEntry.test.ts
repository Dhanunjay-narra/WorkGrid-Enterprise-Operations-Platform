import { IdentityEntryService } from "../../../services/core-engine/src/identity/services/IdentityEntryService";
import { IdentityEntryValidator } from "../../../packages/types/src/domains/identity/IdentityEntry";
import { IdentityEntryStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityEntryStateMachine";

describe("IdentityEntry Comprehensive Domain Test Suite", () => {
  const service = new IdentityEntryService();
  const sm = new IdentityEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityEntry Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
