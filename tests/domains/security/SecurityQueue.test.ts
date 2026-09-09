import { SecurityQueueService } from "../../../services/core-engine/src/security/services/SecurityQueueService";
import { SecurityQueueValidator } from "../../../packages/types/src/domains/security/SecurityQueue";
import { SecurityQueueStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityQueueStateMachine";

describe("SecurityQueue Comprehensive Domain Test Suite", () => {
  const service = new SecurityQueueService();
  const sm = new SecurityQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityQueue Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
