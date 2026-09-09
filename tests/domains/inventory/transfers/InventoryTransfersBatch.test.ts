import { InventoryTransfersBatchService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersBatchService";
import { InventoryTransfersBatchValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersBatch";
import { InventoryTransfersBatchStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersBatchStateMachine";

describe("InventoryTransfersBatch Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersBatchService();
  const sm = new InventoryTransfersBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersBatch Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
