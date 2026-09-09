import { TenancySummaryService } from "../../../services/core-engine/src/tenancy/services/TenancySummaryService";
import { TenancySummaryValidator } from "../../../packages/types/src/domains/tenancy/TenancySummary";
import { TenancySummaryStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancySummaryStateMachine";

describe("TenancySummary Comprehensive Domain Test Suite", () => {
  const service = new TenancySummaryService();
  const sm = new TenancySummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancySummary Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancySummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
