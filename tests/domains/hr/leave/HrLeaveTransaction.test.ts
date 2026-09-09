import { HrLeaveTransactionService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveTransactionService";
import { HrLeaveTransactionValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveTransaction";
import { HrLeaveTransactionStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveTransactionStateMachine";

describe("HrLeaveTransaction Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveTransactionService();
  const sm = new HrLeaveTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveTransaction Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
