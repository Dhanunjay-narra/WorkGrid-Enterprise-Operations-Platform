import { ProjectGanttQueueService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttQueueService";
import { ProjectGanttQueueValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttQueue";
import { ProjectGanttQueueStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttQueueStateMachine";

describe("ProjectGanttQueue Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttQueueService();
  const sm = new ProjectGanttQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttQueue Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
