import { HrRecruitmentEventService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentEventService";
import { HrRecruitmentEventValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentEvent";
import { HrRecruitmentEventStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentEventStateMachine";

describe("HrRecruitmentEvent Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentEventService();
  const sm = new HrRecruitmentEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentEvent Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
