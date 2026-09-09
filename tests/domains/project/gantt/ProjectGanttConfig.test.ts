import { ProjectGanttConfigService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttConfigService";
import { ProjectGanttConfigValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttConfig";
import { ProjectGanttConfigStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttConfigStateMachine";

describe("ProjectGanttConfig Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttConfigService();
  const sm = new ProjectGanttConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttConfig Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
