import { TenancyStateService } from "../../../services/core-engine/src/tenancy/services/TenancyStateService";
import { TenancyStateValidator } from "../../../packages/types/src/domains/tenancy/TenancyState";
import { TenancyStateStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyStateStateMachine";

describe("TenancyState Comprehensive Domain Test Suite", () => {
  const service = new TenancyStateService();
  const sm = new TenancyStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyState Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
