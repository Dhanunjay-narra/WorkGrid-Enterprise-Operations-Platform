import { ProjectCapacitySessionService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacitySessionService";
import { ProjectCapacitySessionValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacitySession";
import { ProjectCapacitySessionStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacitySessionStateMachine";

describe("ProjectCapacitySession Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacitySessionService();
  const sm = new ProjectCapacitySessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacitySession Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacitySessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
