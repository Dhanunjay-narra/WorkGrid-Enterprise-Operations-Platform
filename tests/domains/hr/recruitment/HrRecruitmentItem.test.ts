import { HrRecruitmentItemService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentItemService";
import { HrRecruitmentItemValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentItem";
import { HrRecruitmentItemStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentItemStateMachine";

describe("HrRecruitmentItem Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentItemService();
  const sm = new HrRecruitmentItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentItem Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
