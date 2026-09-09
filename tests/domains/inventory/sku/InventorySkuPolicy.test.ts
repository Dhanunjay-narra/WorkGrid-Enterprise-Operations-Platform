import { InventorySkuPolicyService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuPolicyService";
import { InventorySkuPolicyValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuPolicy";
import { InventorySkuPolicyStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuPolicyStateMachine";

describe("InventorySkuPolicy Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuPolicyService();
  const sm = new InventorySkuPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuPolicy Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
