import { HrRecruitmentSnapshotService } from "../../../services/core-engine/src/hr/recruitment/services/HrRecruitmentSnapshotService";
import { HrRecruitmentSnapshotValidator } from "../../../packages/types/src/domains/hr/recruitment/HrRecruitmentSnapshot";
import { HrRecruitmentSnapshotStateMachine } from "../../../services/core-engine/src/hr/recruitment/state-machines/HrRecruitmentSnapshotStateMachine";

describe("HrRecruitmentSnapshot Comprehensive Domain Test Suite", () => {
  const service = new HrRecruitmentSnapshotService();
  const sm = new HrRecruitmentSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrRecruitmentSnapshot Instance",
      domain: "hr_recruitment",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrRecruitmentSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
