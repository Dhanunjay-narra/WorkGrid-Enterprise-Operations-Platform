import { SecurityScheduleService } from "../../../services/core-engine/src/security/services/SecurityScheduleService";
import { SecurityScheduleValidator } from "../../../packages/types/src/domains/security/SecuritySchedule";
import { SecurityScheduleStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityScheduleStateMachine";

describe("SecuritySchedule Comprehensive Domain Test Suite", () => {
  const service = new SecurityScheduleService();
  const sm = new SecurityScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecuritySchedule Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
