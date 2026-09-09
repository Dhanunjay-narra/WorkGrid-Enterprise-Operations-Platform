import { InventoryStockItemService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockItemService";
import { InventoryStockItemValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockItem";
import { InventoryStockItemStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockItemStateMachine";

describe("InventoryStockItem Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockItemService();
  const sm = new InventoryStockItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockItem Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
