import { ProjectGanttSnapshotService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttSnapshotService";
import { ProjectGanttSnapshotValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttSnapshot";
import { ProjectGanttSnapshotStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttSnapshotStateMachine";

describe("ProjectGanttSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttSnapshotService();
  const sm = new ProjectGanttSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttSnapshot Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
