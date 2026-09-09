import { ProjectWorkspacesSnapshotService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesSnapshotService";
import { ProjectWorkspacesSnapshotValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesSnapshot";
import { ProjectWorkspacesSnapshotStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesSnapshotStateMachine";

describe("ProjectWorkspacesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesSnapshotService();
  const sm = new ProjectWorkspacesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesSnapshot Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
