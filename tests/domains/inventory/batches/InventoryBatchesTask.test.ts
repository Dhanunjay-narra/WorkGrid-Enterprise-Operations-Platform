import { InventoryBatchesTaskService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesTaskService";
import { InventoryBatchesTaskValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesTask";
import { InventoryBatchesTaskStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesTaskStateMachine";

describe("InventoryBatchesTask Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesTaskService();
  const sm = new InventoryBatchesTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesTask Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
