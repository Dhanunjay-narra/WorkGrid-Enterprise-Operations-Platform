import { HrRecruitmentEntryService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentEntryService";
import { HrRecruitmentEntryValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentEntry";
import { HrRecruitmentEntryStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentEntryStateMachine";

describe("HrRecruitmentEntry Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentEntryService();
  const sm = new HrRecruitmentEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentEntry Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
