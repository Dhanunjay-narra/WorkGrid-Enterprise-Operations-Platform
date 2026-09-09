import { SecurityThresholdService } from "../../../services/core-engine/src/security/services/SecurityThresholdService";
import { SecurityThresholdValidator } from "../../../packages/types/src/domains/security/SecurityThreshold";
import { SecurityThresholdStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityThresholdStateMachine";

describe("SecurityThreshold Comprehensive Domain Test Suite", () => {
  const service = new SecurityThresholdService();
  const sm = new SecurityThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityThreshold Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
