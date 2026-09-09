import { ProjectGanttItemService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttItemService";
import { ProjectGanttItemValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttItem";
import { ProjectGanttItemStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttItemStateMachine";

describe("ProjectGanttItem Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttItemService();
  const sm = new ProjectGanttItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttItem Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
