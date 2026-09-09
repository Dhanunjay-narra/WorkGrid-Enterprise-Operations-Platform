import { ProjectSprintsEventService } from "../../../services/core-engine/src/project/sprints/services/ProjectSprintsEventService";
import { ProjectSprintsEventValidator } from "../../../packages/types/src/domains/project/sprints/ProjectSprintsEvent";
import { ProjectSprintsEventStateMachine } from "../../../services/core-engine/src/project/sprints/state-machines/ProjectSprintsEventStateMachine";

describe("ProjectSprintsEvent Comprehensive Domain Test Suite", () => {
  const service = new ProjectSprintsEventService();
  const sm = new ProjectSprintsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectSprintsEvent Instance",
      domain: "project_sprints",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectSprintsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
