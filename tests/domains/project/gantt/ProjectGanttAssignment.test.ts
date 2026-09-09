import { ProjectGanttAssignmentService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttAssignmentService";
import { ProjectGanttAssignmentValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttAssignment";
import { ProjectGanttAssignmentStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttAssignmentStateMachine";

describe("ProjectGanttAssignment Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttAssignmentService();
  const sm = new ProjectGanttAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttAssignment Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
