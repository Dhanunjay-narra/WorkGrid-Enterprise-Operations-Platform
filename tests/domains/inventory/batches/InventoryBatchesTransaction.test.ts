import { InventoryBatchesTransactionService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesTransactionService";
import { InventoryBatchesTransactionValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesTransaction";
import { InventoryBatchesTransactionStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesTransactionStateMachine";

describe("InventoryBatchesTransaction Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesTransactionService();
  const sm = new InventoryBatchesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesTransaction Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
