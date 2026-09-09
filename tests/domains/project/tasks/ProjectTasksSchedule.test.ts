import { ProjectTasksScheduleService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksScheduleService";
import { ProjectTasksScheduleValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksSchedule";
import { ProjectTasksScheduleStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksScheduleStateMachine";

describe("ProjectTasksSchedule Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksScheduleService();
  const sm = new ProjectTasksScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksSchedule Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
