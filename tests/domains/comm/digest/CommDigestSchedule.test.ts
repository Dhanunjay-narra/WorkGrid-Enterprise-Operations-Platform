import { CommDigestScheduleService } from "../../../services/core-engine/src/comm/digest/services/CommDigestScheduleService";
import { CommDigestScheduleValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestSchedule";
import { CommDigestScheduleStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestScheduleStateMachine";

describe("CommDigestSchedule Comprehensive Domain Test Suite", () => {
  const service = new CommDigestScheduleService();
  const sm = new CommDigestScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestSchedule Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
