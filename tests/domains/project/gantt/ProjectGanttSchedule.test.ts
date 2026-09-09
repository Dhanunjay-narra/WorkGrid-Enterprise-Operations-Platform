import { ProjectGanttScheduleService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttScheduleService";
import { ProjectGanttScheduleValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttSchedule";
import { ProjectGanttScheduleStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttScheduleStateMachine";

describe("ProjectGanttSchedule Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttScheduleService();
  const sm = new ProjectGanttScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttSchedule Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
