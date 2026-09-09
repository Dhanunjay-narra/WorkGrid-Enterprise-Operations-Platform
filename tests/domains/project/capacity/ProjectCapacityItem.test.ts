import { ProjectCapacityItemService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityItemService";
import { ProjectCapacityItemValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityItem";
import { ProjectCapacityItemStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityItemStateMachine";

describe("ProjectCapacityItem Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityItemService();
  const sm = new ProjectCapacityItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityItem Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
