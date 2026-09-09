import { RbacMetricService } from "../../../services/core-engine/src/rbac/services/RbacMetricService";
import { RbacMetricValidator } from "../../../packages/types/src/domains/rbac/RbacMetric";
import { RbacMetricStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacMetricStateMachine";

describe("RbacMetric Comprehensive Domain Test Suite", () => {
  const service = new RbacMetricService();
  const sm = new RbacMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacMetric Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
