import { InventoryTransfersEventService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersEventService";
import { InventoryTransfersEventValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersEvent";
import { InventoryTransfersEventStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersEventStateMachine";

describe("InventoryTransfersEvent Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersEventService();
  const sm = new InventoryTransfersEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersEvent Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
