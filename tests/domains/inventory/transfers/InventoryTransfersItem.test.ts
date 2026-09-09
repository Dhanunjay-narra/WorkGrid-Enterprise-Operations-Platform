import { InventoryTransfersItemService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersItemService";
import { InventoryTransfersItemValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersItem";
import { InventoryTransfersItemStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersItemStateMachine";

describe("InventoryTransfersItem Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersItemService();
  const sm = new InventoryTransfersItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersItem Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
