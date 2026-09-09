import { ProjectTasksThresholdService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksThresholdService";
import { ProjectTasksThresholdValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksThreshold";
import { ProjectTasksThresholdStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksThresholdStateMachine";

describe("ProjectTasksThreshold Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksThresholdService();
  const sm = new ProjectTasksThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksThreshold Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
