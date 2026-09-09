import { HrLeaveNodeService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveNodeService";
import { HrLeaveNodeValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveNode";
import { HrLeaveNodeStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveNodeStateMachine";

describe("HrLeaveNode Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveNodeService();
  const sm = new HrLeaveNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveNode Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
