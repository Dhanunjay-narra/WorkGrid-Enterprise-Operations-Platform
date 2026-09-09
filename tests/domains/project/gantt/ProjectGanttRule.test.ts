import { ProjectGanttRuleService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttRuleService";
import { ProjectGanttRuleValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttRule";
import { ProjectGanttRuleStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttRuleStateMachine";

describe("ProjectGanttRule Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttRuleService();
  const sm = new ProjectGanttRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttRule Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
