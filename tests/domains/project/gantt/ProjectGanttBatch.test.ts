import { ProjectGanttBatchService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttBatchService";
import { ProjectGanttBatchValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttBatch";
import { ProjectGanttBatchStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttBatchStateMachine";

describe("ProjectGanttBatch Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttBatchService();
  const sm = new ProjectGanttBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttBatch Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
