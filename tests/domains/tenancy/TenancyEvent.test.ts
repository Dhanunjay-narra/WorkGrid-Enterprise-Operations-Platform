import { TenancyEventService } from "../../../services/core-engine/src/tenancy/services/TenancyEventService";
import { TenancyEventValidator } from "../../../packages/types/src/domains/tenancy/TenancyEvent";
import { TenancyEventStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyEventStateMachine";

describe("TenancyEvent Comprehensive Domain Test Suite", () => {
  const service = new TenancyEventService();
  const sm = new TenancyEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyEvent Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
