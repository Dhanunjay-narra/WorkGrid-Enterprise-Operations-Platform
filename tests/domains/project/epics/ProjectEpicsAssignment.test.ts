import { ProjectEpicsAssignmentService } from "../../../services/core-engine/src/project/epics/services/ProjectEpicsAssignmentService";
import { ProjectEpicsAssignmentValidator } from "../../../packages/types/src/domains/project/epics/ProjectEpicsAssignment";
import { ProjectEpicsAssignmentStateMachine } from "../../../services/core-engine/src/project/epics/state-machines/ProjectEpicsAssignmentStateMachine";

describe("ProjectEpicsAssignment Comprehensive Domain Test Suite", () => {
  const service = new ProjectEpicsAssignmentService();
  const sm = new ProjectEpicsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectEpicsAssignment Instance",
      domain: "project_epics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectEpicsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
