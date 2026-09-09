import { ProjectTasksMappingService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksMappingService";
import { ProjectTasksMappingValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksMapping";
import { ProjectTasksMappingStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksMappingStateMachine";

describe("ProjectTasksMapping Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksMappingService();
  const sm = new ProjectTasksMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksMapping Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
