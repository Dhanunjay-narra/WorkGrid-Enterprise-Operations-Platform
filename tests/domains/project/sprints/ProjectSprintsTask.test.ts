import { ProjectSprintsTaskService } from "../../../services/core-engine/src/project/sprints/services/ProjectSprintsTaskService";
import { ProjectSprintsTaskValidator } from "../../../packages/types/src/domains/project/sprints/ProjectSprintsTask";
import { ProjectSprintsTaskStateMachine } from "../../../services/core-engine/src/project/sprints/state-machines/ProjectSprintsTaskStateMachine";

describe("ProjectSprintsTask Comprehensive Domain Test Suite", () => {
  const service = new ProjectSprintsTaskService();
  const sm = new ProjectSprintsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectSprintsTask Instance",
      domain: "project_sprints",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectSprintsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
