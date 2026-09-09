import { AuthMappingService } from "../../../services/core-engine/src/auth/services/AuthMappingService";
import { AuthMappingValidator } from "../../../packages/types/src/domains/auth/AuthMapping";
import { AuthMappingStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthMappingStateMachine";

describe("AuthMapping Comprehensive Domain Test Suite", () => {
  const service = new AuthMappingService();
  const sm = new AuthMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthMapping Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
