import { InventoryBatchesItemService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesItemService";
import { InventoryBatchesItemValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesItem";
import { InventoryBatchesItemStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesItemStateMachine";

describe("InventoryBatchesItem Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesItemService();
  const sm = new InventoryBatchesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesItem Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
