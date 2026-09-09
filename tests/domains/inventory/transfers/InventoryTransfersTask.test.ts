import { InventoryTransfersTaskService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersTaskService";
import { InventoryTransfersTaskValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersTask";
import { InventoryTransfersTaskStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersTaskStateMachine";

describe("InventoryTransfersTask Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersTaskService();
  const sm = new InventoryTransfersTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersTask Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
