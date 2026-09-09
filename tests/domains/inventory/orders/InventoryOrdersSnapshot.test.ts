import { InventoryOrdersSnapshotService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersSnapshotService";
import { InventoryOrdersSnapshotValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersSnapshot";
import { InventoryOrdersSnapshotStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersSnapshotStateMachine";

describe("InventoryOrdersSnapshot Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersSnapshotService();
  const sm = new InventoryOrdersSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersSnapshot Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
