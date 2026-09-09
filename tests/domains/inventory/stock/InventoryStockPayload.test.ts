import { InventoryStockPayloadService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockPayloadService";
import { InventoryStockPayloadValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockPayload";
import { InventoryStockPayloadStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockPayloadStateMachine";

describe("InventoryStockPayload Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockPayloadService();
  const sm = new InventoryStockPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockPayload Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
