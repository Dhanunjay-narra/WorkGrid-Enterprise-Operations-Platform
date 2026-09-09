import { SecurityTaskService } from "../../../services/core-engine/src/security/services/SecurityTaskService";
import { SecurityTaskValidator } from "../../../packages/types/src/domains/security/SecurityTask";
import { SecurityTaskStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityTaskStateMachine";

describe("SecurityTask Comprehensive Domain Test Suite", () => {
  const service = new SecurityTaskService();
  const sm = new SecurityTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityTask Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
