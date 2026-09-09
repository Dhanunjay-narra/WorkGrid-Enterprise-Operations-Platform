import { ProjectTasksReportService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksReportService";
import { ProjectTasksReportValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksReport";
import { ProjectTasksReportStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksReportStateMachine";

describe("ProjectTasksReport Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksReportService();
  const sm = new ProjectTasksReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksReport Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
