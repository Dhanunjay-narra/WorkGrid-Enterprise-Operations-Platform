import { ProjectGanttNodeService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttNodeService";
import { ProjectGanttNodeValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttNode";
import { ProjectGanttNodeStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttNodeStateMachine";

describe("ProjectGanttNode Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttNodeService();
  const sm = new ProjectGanttNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttNode Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
