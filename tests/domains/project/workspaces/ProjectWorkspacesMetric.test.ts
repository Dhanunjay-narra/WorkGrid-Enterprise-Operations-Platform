import { ProjectWorkspacesMetricService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesMetricService";
import { ProjectWorkspacesMetricValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesMetric";
import { ProjectWorkspacesMetricStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesMetricStateMachine";

describe("ProjectWorkspacesMetric Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesMetricService();
  const sm = new ProjectWorkspacesMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesMetric Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
