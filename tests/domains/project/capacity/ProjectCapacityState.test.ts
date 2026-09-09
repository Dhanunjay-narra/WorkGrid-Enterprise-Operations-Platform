import { ProjectCapacityStateService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityStateService";
import { ProjectCapacityStateValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityState";
import { ProjectCapacityStateStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityStateStateMachine";

describe("ProjectCapacityState Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityStateService();
  const sm = new ProjectCapacityStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityState Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
