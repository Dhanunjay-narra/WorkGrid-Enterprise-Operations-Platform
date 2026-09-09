import { IdentityPayloadService } from "../../../services/core-engine/src/identity/services/IdentityPayloadService";
import { IdentityPayloadValidator } from "../../../packages/types/src/domains/identity/IdentityPayload";
import { IdentityPayloadStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityPayloadStateMachine";

describe("IdentityPayload Comprehensive Domain Test Suite", () => {
  const service = new IdentityPayloadService();
  const sm = new IdentityPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityPayload Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
