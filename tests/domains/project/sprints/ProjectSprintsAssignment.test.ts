import { ProjectSprintsAssignmentService } from "../../../services/core-engine/src/project/sprints/services/ProjectSprintsAssignmentService";
import { ProjectSprintsAssignmentValidator } from "../../../packages/types/src/domains/project/sprints/ProjectSprintsAssignment";
import { ProjectSprintsAssignmentStateMachine } from "../../../services/core-engine/src/project/sprints/state-machines/ProjectSprintsAssignmentStateMachine";

describe("ProjectSprintsAssignment Comprehensive Domain Test Suite", () => {
  const service = new ProjectSprintsAssignmentService();
  const sm = new ProjectSprintsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectSprintsAssignment Instance",
      domain: "project_sprints",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectSprintsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
