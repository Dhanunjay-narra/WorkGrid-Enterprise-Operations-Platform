import { TenancyPolicyService } from "../../../services/core-engine/src/tenancy/services/TenancyPolicyService";
import { TenancyPolicyValidator } from "../../../packages/types/src/domains/tenancy/TenancyPolicy";
import { TenancyPolicyStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyPolicyStateMachine";

describe("TenancyPolicy Comprehensive Domain Test Suite", () => {
  const service = new TenancyPolicyService();
  const sm = new TenancyPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyPolicy Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
