import { ProjectTasksTaskService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksTaskService";
import { ProjectTasksTaskValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksTask";
import { ProjectTasksTaskStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksTaskStateMachine";

describe("ProjectTasksTask Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksTaskService();
  const sm = new ProjectTasksTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksTask Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
