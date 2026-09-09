import { HrLeavePayloadService } from "../../../services/core-engine/src/hr/leave/services/HrLeavePayloadService";
import { HrLeavePayloadValidator } from "../../../packages/types/src/domains/hr/leave/HrLeavePayload";
import { HrLeavePayloadStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeavePayloadStateMachine";

describe("HrLeavePayload Comprehensive Domain Test Suite", () => {
  const service = new HrLeavePayloadService();
  const sm = new HrLeavePayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeavePayload Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeavePayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
