import { ProjectGanttTaskService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttTaskService";
import { ProjectGanttTaskValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttTask";
import { ProjectGanttTaskStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttTaskStateMachine";

describe("ProjectGanttTask Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttTaskService();
  const sm = new ProjectGanttTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttTask Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
