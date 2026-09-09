import { ProjectTasksPayloadService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksPayloadService";
import { ProjectTasksPayloadValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksPayload";
import { ProjectTasksPayloadStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksPayloadStateMachine";

describe("ProjectTasksPayload Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksPayloadService();
  const sm = new ProjectTasksPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksPayload Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
