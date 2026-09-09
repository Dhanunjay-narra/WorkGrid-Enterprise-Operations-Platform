import { TenancyThresholdService } from "../../../services/core-engine/src/tenancy/services/TenancyThresholdService";
import { TenancyThresholdValidator } from "../../../packages/types/src/domains/tenancy/TenancyThreshold";
import { TenancyThresholdStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyThresholdStateMachine";

describe("TenancyThreshold Comprehensive Domain Test Suite", () => {
  const service = new TenancyThresholdService();
  const sm = new TenancyThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyThreshold Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
