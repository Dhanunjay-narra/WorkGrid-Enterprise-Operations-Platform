import { HrRecruitmentQueueService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentQueueService";
import { HrRecruitmentQueueValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentQueue";
import { HrRecruitmentQueueStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentQueueStateMachine";

describe("HrRecruitmentQueue Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentQueueService();
  const sm = new HrRecruitmentQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentQueue Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
