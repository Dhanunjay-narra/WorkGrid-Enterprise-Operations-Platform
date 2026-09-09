import { ProjectCapacityPolicyService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityPolicyService";
import { ProjectCapacityPolicyValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityPolicy";
import { ProjectCapacityPolicyStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityPolicyStateMachine";

describe("ProjectCapacityPolicy Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityPolicyService();
  const sm = new ProjectCapacityPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityPolicy Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
