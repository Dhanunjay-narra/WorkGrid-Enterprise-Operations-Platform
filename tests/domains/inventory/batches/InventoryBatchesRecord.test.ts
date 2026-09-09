import { InventoryBatchesRecordService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesRecordService";
import { InventoryBatchesRecordValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesRecord";
import { InventoryBatchesRecordStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesRecordStateMachine";

describe("InventoryBatchesRecord Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesRecordService();
  const sm = new InventoryBatchesRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesRecord Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
