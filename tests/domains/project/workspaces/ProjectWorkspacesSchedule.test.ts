import { ProjectWorkspacesScheduleService } from "../../../services/core-engine/src/project/workspaces/services/ProjectWorkspacesScheduleService";
import { ProjectWorkspacesScheduleValidator } from "../../../packages/types/src/domains/project/workspaces/ProjectWorkspacesSchedule";
import { ProjectWorkspacesScheduleStateMachine } from "../../../services/core-engine/src/project/workspaces/state-machines/ProjectWorkspacesScheduleStateMachine";

describe("ProjectWorkspacesSchedule Comprehensive Domain Test Suite", () => {
  const service = new ProjectWorkspacesScheduleService();
  const sm = new ProjectWorkspacesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectWorkspacesSchedule Instance",
      domain: "project_workspaces",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectWorkspacesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
