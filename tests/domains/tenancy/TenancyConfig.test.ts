import { TenancyConfigService } from "../../../services/core-engine/src/tenancy/services/TenancyConfigService";
import { TenancyConfigValidator } from "../../../packages/types/src/domains/tenancy/TenancyConfig";
import { TenancyConfigStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyConfigStateMachine";

describe("TenancyConfig Comprehensive Domain Test Suite", () => {
  const service = new TenancyConfigService();
  const sm = new TenancyConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyConfig Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
