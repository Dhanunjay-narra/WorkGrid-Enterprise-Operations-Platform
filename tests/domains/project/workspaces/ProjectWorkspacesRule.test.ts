import { ProjectWorkspacesRuleService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesRuleService";
import { ProjectWorkspacesRuleValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesRule";
import { ProjectWorkspacesRuleStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesRuleStateMachine";

describe("ProjectWorkspacesRule Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesRuleService();
  const sm = new ProjectWorkspacesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesRule Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
