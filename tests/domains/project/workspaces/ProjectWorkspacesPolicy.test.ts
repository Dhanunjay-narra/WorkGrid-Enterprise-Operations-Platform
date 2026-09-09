import { ProjectWorkspacesPolicyService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesPolicyService";
import { ProjectWorkspacesPolicyValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesPolicy";
import { ProjectWorkspacesPolicyStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesPolicyStateMachine";

describe("ProjectWorkspacesPolicy Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesPolicyService();
  const sm = new ProjectWorkspacesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesPolicy Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
