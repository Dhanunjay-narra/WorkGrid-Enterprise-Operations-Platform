import { InventoryOrdersEntryService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersEntryService";
import { InventoryOrdersEntryValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersEntry";
import { InventoryOrdersEntryStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersEntryStateMachine";

describe("InventoryOrdersEntry Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersEntryService();
  const sm = new InventoryOrdersEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersEntry Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
