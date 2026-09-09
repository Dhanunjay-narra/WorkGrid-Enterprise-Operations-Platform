import { TenancyMetricService } from "../../../services/core-engine/src/tenancy/services/TenancyMetricService";
import { TenancyMetricValidator } from "../../../packages/types/src/domains/tenancy/TenancyMetric";
import { TenancyMetricStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyMetricStateMachine";

describe("TenancyMetric Comprehensive Domain Test Suite", () => {
  const service = new TenancyMetricService();
  const sm = new TenancyMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyMetric Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
