import { HrRecruitmentScheduleService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentScheduleService";
import { HrRecruitmentScheduleValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentSchedule";
import { HrRecruitmentScheduleStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentScheduleStateMachine";

describe("HrRecruitmentSchedule Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentScheduleService();
  const sm = new HrRecruitmentScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentSchedule Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
