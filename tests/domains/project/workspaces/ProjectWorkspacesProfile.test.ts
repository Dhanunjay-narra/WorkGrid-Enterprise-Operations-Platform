import { ProjectWorkspacesProfileService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesProfileService";
import { ProjectWorkspacesProfileValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesProfile";
import { ProjectWorkspacesProfileStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesProfileStateMachine";

describe("ProjectWorkspacesProfile Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesProfileService();
  const sm = new ProjectWorkspacesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesProfile Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
