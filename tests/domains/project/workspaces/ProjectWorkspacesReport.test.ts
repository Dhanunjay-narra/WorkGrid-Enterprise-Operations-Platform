import { ProjectWorkspacesReportService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesReportService";
import { ProjectWorkspacesReportValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesReport";
import { ProjectWorkspacesReportStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesReportStateMachine";

describe("ProjectWorkspacesReport Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesReportService();
  const sm = new ProjectWorkspacesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesReport Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
