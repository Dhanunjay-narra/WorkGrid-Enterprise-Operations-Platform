import { ProjectWorkspacesPayloadService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesPayloadService";
import { ProjectWorkspacesPayloadValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesPayload";
import { ProjectWorkspacesPayloadStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesPayloadStateMachine";

describe("ProjectWorkspacesPayload Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesPayloadService();
  const sm = new ProjectWorkspacesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesPayload Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
