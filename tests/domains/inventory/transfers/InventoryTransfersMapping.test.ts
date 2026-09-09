import { InventoryTransfersMappingService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersMappingService";
import { InventoryTransfersMappingValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersMapping";
import { InventoryTransfersMappingStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersMappingStateMachine";

describe("InventoryTransfersMapping Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersMappingService();
  const sm = new InventoryTransfersMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersMapping Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
