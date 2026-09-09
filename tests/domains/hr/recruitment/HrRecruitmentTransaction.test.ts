import { HrRecruitmentTransactionService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentTransactionService";
import { HrRecruitmentTransactionValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentTransaction";
import { HrRecruitmentTransactionStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentTransactionStateMachine";

describe("HrRecruitmentTransaction Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentTransactionService();
  const sm = new HrRecruitmentTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentTransaction Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
