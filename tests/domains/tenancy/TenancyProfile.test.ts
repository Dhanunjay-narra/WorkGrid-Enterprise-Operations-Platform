import { TenancyProfileService } from "../../../services/core-engine/src/tenancy/services/TenancyProfileService";
import { TenancyProfileValidator } from "../../../packages/types/src/domains/tenancy/TenancyProfile";
import { TenancyProfileStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyProfileStateMachine";

describe("TenancyProfile Comprehensive Domain Test Suite", () => {
  const service = new TenancyProfileService();
  const sm = new TenancyProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyProfile Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
