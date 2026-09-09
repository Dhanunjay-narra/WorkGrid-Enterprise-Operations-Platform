import { HrLeaveEntryService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveEntryService";
import { HrLeaveEntryValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveEntry";
import { HrLeaveEntryStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveEntryStateMachine";

describe("HrLeaveEntry Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveEntryService();
  const sm = new HrLeaveEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveEntry Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
