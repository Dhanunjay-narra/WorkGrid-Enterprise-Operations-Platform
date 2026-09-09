import { InventoryBatchesPolicyService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesPolicyService";
import { InventoryBatchesPolicyValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesPolicy";
import { InventoryBatchesPolicyStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesPolicyStateMachine";

describe("InventoryBatchesPolicy Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesPolicyService();
  const sm = new InventoryBatchesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesPolicy Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
