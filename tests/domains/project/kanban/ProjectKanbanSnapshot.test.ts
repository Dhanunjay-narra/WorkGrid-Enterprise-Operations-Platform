import { ProjectKanbanSnapshotService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanSnapshotService";
import { ProjectKanbanSnapshotValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanSnapshot";
import { ProjectKanbanSnapshotStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanSnapshotStateMachine";

describe("ProjectKanbanSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanSnapshotService();
  const sm = new ProjectKanbanSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanSnapshot Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
