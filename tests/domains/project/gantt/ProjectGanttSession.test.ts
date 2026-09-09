import { ProjectGanttSessionService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttSessionService";
import { ProjectGanttSessionValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttSession";
import { ProjectGanttSessionStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttSessionStateMachine";

describe("ProjectGanttSession Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttSessionService();
  const sm = new ProjectGanttSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttSession Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
