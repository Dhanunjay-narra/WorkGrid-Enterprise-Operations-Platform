import { CrmHealthScheduleService } from "../../../services/core-engine/src/crm/health/services/CrmHealthScheduleService";
import { CrmHealthScheduleValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthSchedule";
import { CrmHealthScheduleStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthScheduleStateMachine";

describe("CrmHealthSchedule Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthScheduleService();
  const sm = new CrmHealthScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthSchedule Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
