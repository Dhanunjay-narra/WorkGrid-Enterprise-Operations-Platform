import { InventoryStockBatchService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockBatchService";
import { InventoryStockBatchValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockBatch";
import { InventoryStockBatchStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockBatchStateMachine";

describe("InventoryStockBatch Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockBatchService();
  const sm = new InventoryStockBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockBatch Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
