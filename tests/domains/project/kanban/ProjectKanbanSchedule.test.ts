import { ProjectKanbanScheduleService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanScheduleService";
import { ProjectKanbanScheduleValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanSchedule";
import { ProjectKanbanScheduleStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanScheduleStateMachine";

describe("ProjectKanbanSchedule Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanScheduleService();
  const sm = new ProjectKanbanScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanSchedule Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
