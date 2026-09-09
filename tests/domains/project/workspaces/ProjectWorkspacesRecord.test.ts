import { ProjectWorkspacesRecordService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesRecordService";
import { ProjectWorkspacesRecordValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesRecord";
import { ProjectWorkspacesRecordStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesRecordStateMachine";

describe("ProjectWorkspacesRecord Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesRecordService();
  const sm = new ProjectWorkspacesRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesRecord Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
