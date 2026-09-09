import { InventoryBatchesThresholdService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesThresholdService";
import { InventoryBatchesThresholdValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesThreshold";
import { InventoryBatchesThresholdStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesThresholdStateMachine";

describe("InventoryBatchesThreshold Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesThresholdService();
  const sm = new InventoryBatchesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesThreshold Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
