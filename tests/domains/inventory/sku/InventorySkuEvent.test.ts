import { InventorySkuEventService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuEventService";
import { InventorySkuEventValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuEvent";
import { InventorySkuEventStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuEventStateMachine";

describe("InventorySkuEvent Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuEventService();
  const sm = new InventorySkuEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuEvent Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
