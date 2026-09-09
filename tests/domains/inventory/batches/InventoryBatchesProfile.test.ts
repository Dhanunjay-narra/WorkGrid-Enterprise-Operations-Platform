import { InventoryBatchesProfileService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesProfileService";
import { InventoryBatchesProfileValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesProfile";
import { InventoryBatchesProfileStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesProfileStateMachine";

describe("InventoryBatchesProfile Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesProfileService();
  const sm = new InventoryBatchesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesProfile Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
