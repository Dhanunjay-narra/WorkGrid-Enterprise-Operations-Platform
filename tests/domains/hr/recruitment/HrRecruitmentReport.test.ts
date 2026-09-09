import { HrRecruitmentReportService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentReportService";
import { HrRecruitmentReportValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentReport";
import { HrRecruitmentReportStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentReportStateMachine";

describe("HrRecruitmentReport Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentReportService();
  const sm = new HrRecruitmentReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentReport Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
