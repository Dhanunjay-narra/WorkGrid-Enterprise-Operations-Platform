import { HrRecruitmentMetricService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentMetricService";
import { HrRecruitmentMetricValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentMetric";
import { HrRecruitmentMetricStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentMetricStateMachine";

describe("HrRecruitmentMetric Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentMetricService();
  const sm = new HrRecruitmentMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentMetric Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
