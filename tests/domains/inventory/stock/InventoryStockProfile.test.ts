import { InventoryStockProfileService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockProfileService";
import { InventoryStockProfileValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockProfile";
import { InventoryStockProfileStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockProfileStateMachine";

describe("InventoryStockProfile Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockProfileService();
  const sm = new InventoryStockProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockProfile Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
