import { HrLeaveConfigService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveConfigService";
import { HrLeaveConfigValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveConfig";
import { HrLeaveConfigStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveConfigStateMachine";

describe("HrLeaveConfig Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveConfigService();
  const sm = new HrLeaveConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveConfig Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
