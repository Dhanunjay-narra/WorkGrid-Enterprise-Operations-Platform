import { ProjectSprintsThresholdService } from "../../../services/core-engine/src/project/sprints/services/ProjectSprintsThresholdService";
import { ProjectSprintsThresholdValidator } from "../../../packages/types/src/domains/project/sprints/ProjectSprintsThreshold";
import { ProjectSprintsThresholdStateMachine } from "../../../services/core-engine/src/project/sprints/state-machines/ProjectSprintsThresholdStateMachine";

describe("ProjectSprintsThreshold Comprehensive Domain Test Suite", () => {
  const service = new ProjectSprintsThresholdService();
  const sm = new ProjectSprintsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectSprintsThreshold Instance",
      domain: "project_sprints",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectSprintsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
