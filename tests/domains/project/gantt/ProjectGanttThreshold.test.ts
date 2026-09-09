import { ProjectGanttThresholdService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttThresholdService";
import { ProjectGanttThresholdValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttThreshold";
import { ProjectGanttThresholdStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttThresholdStateMachine";

describe("ProjectGanttThreshold Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttThresholdService();
  const sm = new ProjectGanttThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttThreshold Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
