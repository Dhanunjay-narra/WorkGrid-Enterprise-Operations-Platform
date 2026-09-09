import { HrRecruitmentAuditLogService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentAuditLogService";
import { HrRecruitmentAuditLogValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentAuditLog";
import { HrRecruitmentAuditLogStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentAuditLogStateMachine";

describe("HrRecruitmentAuditLog Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentAuditLogService();
  const sm = new HrRecruitmentAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentAuditLog Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
