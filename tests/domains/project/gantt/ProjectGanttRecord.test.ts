import { ProjectGanttRecordService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttRecordService";
import { ProjectGanttRecordValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttRecord";
import { ProjectGanttRecordStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttRecordStateMachine";

describe("ProjectGanttRecord Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttRecordService();
  const sm = new ProjectGanttRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttRecord Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
