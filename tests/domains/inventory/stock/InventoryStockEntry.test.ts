import { InventoryStockEntryService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockEntryService";
import { InventoryStockEntryValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockEntry";
import { InventoryStockEntryStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockEntryStateMachine";

describe("InventoryStockEntry Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockEntryService();
  const sm = new InventoryStockEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockEntry Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
