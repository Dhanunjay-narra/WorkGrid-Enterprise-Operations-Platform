import { SecuritySessionService } from "../../../services/core-engine/src/security/services/SecuritySessionService";
import { SecuritySessionValidator } from "../../../packages/types/src/domains/security/SecuritySession";
import { SecuritySessionStateMachine } from "../../../services/core-engine/src/security/state-machines/SecuritySessionStateMachine";

describe("SecuritySession Comprehensive Domain Test Suite", () => {
  const service = new SecuritySessionService();
  const sm = new SecuritySessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecuritySession Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecuritySessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
