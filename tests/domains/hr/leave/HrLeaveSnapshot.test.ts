import { HrLeaveSnapshotService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveSnapshotService";
import { HrLeaveSnapshotValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveSnapshot";
import { HrLeaveSnapshotStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveSnapshotStateMachine";

describe("HrLeaveSnapshot Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveSnapshotService();
  const sm = new HrLeaveSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveSnapshot Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
