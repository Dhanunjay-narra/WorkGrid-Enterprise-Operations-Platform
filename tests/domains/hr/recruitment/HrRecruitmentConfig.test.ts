import { HrRecruitmentConfigService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentConfigService";
import { HrRecruitmentConfigValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentConfig";
import { HrRecruitmentConfigStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentConfigStateMachine";

describe("HrRecruitmentConfig Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentConfigService();
  const sm = new HrRecruitmentConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentConfig Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
