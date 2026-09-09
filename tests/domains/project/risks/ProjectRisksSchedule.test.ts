import { ProjectRisksScheduleService } from "../../../services/core-engine/src/project/risks/services/ProjectRisksScheduleService";
import { ProjectRisksScheduleValidator } from "../../../packages/types/src/domains/project/risks/ProjectRisksSchedule";
import { ProjectRisksScheduleStateMachine } from "../../../services/core-engine/src/project/risks/state-machines/ProjectRisksScheduleStateMachine";

describe("ProjectRisksSchedule Comprehensive Domain Test Suite", () => {
  const service = new ProjectRisksScheduleService();
  const sm = new ProjectRisksScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectRisksSchedule Instance",
      domain: "project_risks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectRisksScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
