import { ProjectCapacityEntryService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityEntryService";
import { ProjectCapacityEntryValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityEntry";
import { ProjectCapacityEntryStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityEntryStateMachine";

describe("ProjectCapacityEntry Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityEntryService();
  const sm = new ProjectCapacityEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityEntry Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
