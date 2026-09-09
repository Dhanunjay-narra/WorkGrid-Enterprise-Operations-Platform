import { AuthNodeService } from "../../../services/core-engine/src/auth/services/AuthNodeService";
import { AuthNodeValidator } from "../../../packages/types/src/domains/auth/AuthNode";
import { AuthNodeStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthNodeStateMachine";

describe("AuthNode Comprehensive Domain Test Suite", () => {
  const service = new AuthNodeService();
  const sm = new AuthNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthNode Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
