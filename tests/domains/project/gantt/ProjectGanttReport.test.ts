import { ProjectGanttReportService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttReportService";
import { ProjectGanttReportValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttReport";
import { ProjectGanttReportStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttReportStateMachine";

describe("ProjectGanttReport Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttReportService();
  const sm = new ProjectGanttReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttReport Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
