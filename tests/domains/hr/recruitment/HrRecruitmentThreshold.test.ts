import { HrRecruitmentThresholdService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentThresholdService";
import { HrRecruitmentThresholdValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentThreshold";
import { HrRecruitmentThresholdStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentThresholdStateMachine";

describe("HrRecruitmentThreshold Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentThresholdService();
  const sm = new HrRecruitmentThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentThreshold Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
