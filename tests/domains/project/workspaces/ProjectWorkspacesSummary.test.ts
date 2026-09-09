import { ProjectWorkspacesSummaryService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesSummaryService";
import { ProjectWorkspacesSummaryValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesSummary";
import { ProjectWorkspacesSummaryStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesSummaryStateMachine";

describe("ProjectWorkspacesSummary Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesSummaryService();
  const sm = new ProjectWorkspacesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesSummary Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
