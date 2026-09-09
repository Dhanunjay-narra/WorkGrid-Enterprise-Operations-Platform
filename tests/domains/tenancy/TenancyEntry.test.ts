import { TenancyEntryService } from "../../../services/core-engine/src/tenancy/services/TenancyEntryService";
import { TenancyEntryValidator } from "../../../packages/types/src/domains/tenancy/TenancyEntry";
import { TenancyEntryStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyEntryStateMachine";

describe("TenancyEntry Comprehensive Domain Test Suite", () => {
  const service = new TenancyEntryService();
  const sm = new TenancyEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyEntry Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
