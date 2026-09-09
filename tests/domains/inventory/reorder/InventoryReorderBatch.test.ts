import { InventoryReorderBatchService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderBatchService";
import { InventoryReorderBatchValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderBatch";
import { InventoryReorderBatchStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderBatchStateMachine";

describe("InventoryReorderBatch Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderBatchService();
  const sm = new InventoryReorderBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderBatch Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
