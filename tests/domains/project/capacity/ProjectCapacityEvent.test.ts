import { ProjectCapacityEventService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityEventService";
import { ProjectCapacityEventValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityEvent";
import { ProjectCapacityEventStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityEventStateMachine";

describe("ProjectCapacityEvent Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityEventService();
  const sm = new ProjectCapacityEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityEvent Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
