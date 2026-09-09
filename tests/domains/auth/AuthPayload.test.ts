import { AuthPayloadService } from "../../../services/core-engine/src/auth/services/AuthPayloadService";
import { AuthPayloadValidator } from "../../../packages/types/src/domains/auth/AuthPayload";
import { AuthPayloadStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthPayloadStateMachine";

describe("AuthPayload Comprehensive Domain Test Suite", () => {
  const service = new AuthPayloadService();
  const sm = new AuthPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthPayload Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
