import { SecurityNodeService } from "../../../services/core-engine/src/security/services/SecurityNodeService";
import { SecurityNodeValidator } from "../../../packages/types/src/domains/security/SecurityNode";
import { SecurityNodeStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityNodeStateMachine";

describe("SecurityNode Comprehensive Domain Test Suite", () => {
  const service = new SecurityNodeService();
  const sm = new SecurityNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityNode Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
