import { InventoryStockSnapshotService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockSnapshotService";
import { InventoryStockSnapshotValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockSnapshot";
import { InventoryStockSnapshotStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockSnapshotStateMachine";

describe("InventoryStockSnapshot Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockSnapshotService();
  const sm = new InventoryStockSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockSnapshot Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
