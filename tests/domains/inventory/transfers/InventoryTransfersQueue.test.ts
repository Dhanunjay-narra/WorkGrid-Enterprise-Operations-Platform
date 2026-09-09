import { InventoryTransfersQueueService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersQueueService";
import { InventoryTransfersQueueValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersQueue";
import { InventoryTransfersQueueStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersQueueStateMachine";

describe("InventoryTransfersQueue Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersQueueService();
  const sm = new InventoryTransfersQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersQueue Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
