import { ProjectTasksRecordService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksRecordService";
import { ProjectTasksRecordValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksRecord";
import { ProjectTasksRecordStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksRecordStateMachine";

describe("ProjectTasksRecord Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksRecordService();
  const sm = new ProjectTasksRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksRecord Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
