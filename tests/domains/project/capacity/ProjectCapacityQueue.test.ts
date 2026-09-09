import { ProjectCapacityQueueService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityQueueService";
import { ProjectCapacityQueueValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityQueue";
import { ProjectCapacityQueueStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityQueueStateMachine";

describe("ProjectCapacityQueue Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityQueueService();
  const sm = new ProjectCapacityQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityQueue Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
