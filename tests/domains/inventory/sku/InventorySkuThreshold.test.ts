import { InventorySkuThresholdService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuThresholdService";
import { InventorySkuThresholdValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuThreshold";
import { InventorySkuThresholdStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuThresholdStateMachine";

describe("InventorySkuThreshold Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuThresholdService();
  const sm = new InventorySkuThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuThreshold Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
