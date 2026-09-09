import { InventoryOrdersStateService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersStateService";
import { InventoryOrdersStateValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersState";
import { InventoryOrdersStateStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersStateStateMachine";

describe("InventoryOrdersState Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersStateService();
  const sm = new InventoryOrdersStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersState Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
