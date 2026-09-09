import { InventoryStockNodeService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockNodeService";
import { InventoryStockNodeValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockNode";
import { InventoryStockNodeStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockNodeStateMachine";

describe("InventoryStockNode Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockNodeService();
  const sm = new InventoryStockNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockNode Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
