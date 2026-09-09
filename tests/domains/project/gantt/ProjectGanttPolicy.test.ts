import { ProjectGanttPolicyService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttPolicyService";
import { ProjectGanttPolicyValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttPolicy";
import { ProjectGanttPolicyStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttPolicyStateMachine";

describe("ProjectGanttPolicy Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttPolicyService();
  const sm = new ProjectGanttPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttPolicy Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
