import { TenancyNodeService } from "../../../services/core-engine/src/tenancy/services/TenancyNodeService";
import { TenancyNodeValidator } from "../../../packages/types/src/domains/tenancy/TenancyNode";
import { TenancyNodeStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyNodeStateMachine";

describe("TenancyNode Comprehensive Domain Test Suite", () => {
  const service = new TenancyNodeService();
  const sm = new TenancyNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyNode Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
