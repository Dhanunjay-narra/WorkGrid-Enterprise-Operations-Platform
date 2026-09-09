import { InventorySkuBatchService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuBatchService";
import { InventorySkuBatchValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuBatch";
import { InventorySkuBatchStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuBatchStateMachine";

describe("InventorySkuBatch Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuBatchService();
  const sm = new InventorySkuBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuBatch Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
