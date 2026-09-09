import { SecurityEntryService } from "../../../services/core-engine/src/security/services/SecurityEntryService";
import { SecurityEntryValidator } from "../../../packages/types/src/domains/security/SecurityEntry";
import { SecurityEntryStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityEntryStateMachine";

describe("SecurityEntry Comprehensive Domain Test Suite", () => {
  const service = new SecurityEntryService();
  const sm = new SecurityEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityEntry Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
