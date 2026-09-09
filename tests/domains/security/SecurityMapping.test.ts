import { SecurityMappingService } from "../../../services/core-engine/src/security/services/SecurityMappingService";
import { SecurityMappingValidator } from "../../../packages/types/src/domains/security/SecurityMapping";
import { SecurityMappingStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityMappingStateMachine";

describe("SecurityMapping Comprehensive Domain Test Suite", () => {
  const service = new SecurityMappingService();
  const sm = new SecurityMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityMapping Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
