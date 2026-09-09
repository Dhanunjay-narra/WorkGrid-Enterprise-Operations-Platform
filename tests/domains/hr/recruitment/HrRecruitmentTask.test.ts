import { HrRecruitmentTaskService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentTaskService";
import { HrRecruitmentTaskValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentTask";
import { HrRecruitmentTaskStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentTaskStateMachine";

describe("HrRecruitmentTask Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentTaskService();
  const sm = new HrRecruitmentTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentTask Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
