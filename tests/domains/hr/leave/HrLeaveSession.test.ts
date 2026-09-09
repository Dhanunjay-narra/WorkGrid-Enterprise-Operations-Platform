import { HrLeaveSessionService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveSessionService";
import { HrLeaveSessionValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveSession";
import { HrLeaveSessionStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveSessionStateMachine";

describe("HrLeaveSession Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveSessionService();
  const sm = new HrLeaveSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveSession Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
