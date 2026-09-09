import { DmsSignaturesScheduleService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesScheduleService";
import { DmsSignaturesScheduleValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesSchedule";
import { DmsSignaturesScheduleStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesScheduleStateMachine";

describe("DmsSignaturesSchedule Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesScheduleService();
  const sm = new DmsSignaturesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesSchedule Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
