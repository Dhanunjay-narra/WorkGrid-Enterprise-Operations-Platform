import { ProjectWorkspacesMappingService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesMappingService";
import { ProjectWorkspacesMappingValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesMapping";
import { ProjectWorkspacesMappingStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesMappingStateMachine";

describe("ProjectWorkspacesMapping Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesMappingService();
  const sm = new ProjectWorkspacesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesMapping Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
