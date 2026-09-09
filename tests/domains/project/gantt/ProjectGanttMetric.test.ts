import { ProjectGanttMetricService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttMetricService";
import { ProjectGanttMetricValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttMetric";
import { ProjectGanttMetricStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttMetricStateMachine";

describe("ProjectGanttMetric Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttMetricService();
  const sm = new ProjectGanttMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttMetric Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
