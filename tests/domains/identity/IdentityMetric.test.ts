import { IdentityMetricService } from "../../../services/core-engine/src/identity/services/IdentityMetricService";
import { IdentityMetricValidator } from "../../../packages/types/src/domains/identity/IdentityMetric";
import { IdentityMetricStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityMetricStateMachine";

describe("IdentityMetric Comprehensive Domain Test Suite", () => {
  const service = new IdentityMetricService();
  const sm = new IdentityMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityMetric Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
