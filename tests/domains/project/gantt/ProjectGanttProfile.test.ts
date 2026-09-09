import { ProjectGanttProfileService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttProfileService";
import { ProjectGanttProfileValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttProfile";
import { ProjectGanttProfileStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttProfileStateMachine";

describe("ProjectGanttProfile Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttProfileService();
  const sm = new ProjectGanttProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttProfile Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
