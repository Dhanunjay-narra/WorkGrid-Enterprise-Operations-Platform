import { AuthEntryService } from "../../../services/core-engine/src/auth/services/AuthEntryService";
import { AuthEntryValidator } from "../../../packages/types/src/domains/auth/AuthEntry";
import { AuthEntryStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthEntryStateMachine";

describe("AuthEntry Comprehensive Domain Test Suite", () => {
  const service = new AuthEntryService();
  const sm = new AuthEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthEntry Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
