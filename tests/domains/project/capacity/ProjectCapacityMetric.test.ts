import { ProjectCapacityMetricService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityMetricService";
import { ProjectCapacityMetricValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityMetric";
import { ProjectCapacityMetricStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityMetricStateMachine";

describe("ProjectCapacityMetric Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityMetricService();
  const sm = new ProjectCapacityMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityMetric Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
