import { TenancyMappingService } from "../../../services/core-engine/src/tenancy/services/TenancyMappingService";
import { TenancyMappingValidator } from "../../../packages/types/src/domains/tenancy/TenancyMapping";
import { TenancyMappingStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyMappingStateMachine";

describe("TenancyMapping Comprehensive Domain Test Suite", () => {
  const service = new TenancyMappingService();
  const sm = new TenancyMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyMapping Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
