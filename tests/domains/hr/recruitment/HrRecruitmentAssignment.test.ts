import { HrRecruitmentAssignmentService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentAssignmentService";
import { HrRecruitmentAssignmentValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentAssignment";
import { HrRecruitmentAssignmentStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentAssignmentStateMachine";

describe("HrRecruitmentAssignment Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentAssignmentService();
  const sm = new HrRecruitmentAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentAssignment Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
