import { ProjectTasksPolicyService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksPolicyService";
import { ProjectTasksPolicyValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksPolicy";
import { ProjectTasksPolicyStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksPolicyStateMachine";

describe("ProjectTasksPolicy Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksPolicyService();
  const sm = new ProjectTasksPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksPolicy Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
