import { ProjectGanttPayloadService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttPayloadService";
import { ProjectGanttPayloadValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttPayload";
import { ProjectGanttPayloadStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttPayloadStateMachine";

describe("ProjectGanttPayload Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttPayloadService();
  const sm = new ProjectGanttPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttPayload Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
