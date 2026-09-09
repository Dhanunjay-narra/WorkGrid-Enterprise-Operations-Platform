import { AuthScheduleService } from "../../../services/core-engine/src/auth/services/AuthScheduleService";
import { AuthScheduleValidator } from "../../../packages/types/src/domains/auth/AuthSchedule";
import { AuthScheduleStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthScheduleStateMachine";

describe("AuthSchedule Comprehensive Domain Test Suite", () => {
  const service = new AuthScheduleService();
  const sm = new AuthScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthSchedule Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
