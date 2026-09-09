import { SecurityStateService } from "../../../services/core-engine/src/security/services/SecurityStateService";
import { SecurityStateValidator } from "../../../packages/types/src/domains/security/SecurityState";
import { SecurityStateStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityStateStateMachine";

describe("SecurityState Comprehensive Domain Test Suite", () => {
  const service = new SecurityStateService();
  const sm = new SecurityStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityState Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
