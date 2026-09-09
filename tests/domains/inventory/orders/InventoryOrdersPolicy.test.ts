import { InventoryOrdersPolicyService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersPolicyService";
import { InventoryOrdersPolicyValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersPolicy";
import { InventoryOrdersPolicyStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersPolicyStateMachine";

describe("InventoryOrdersPolicy Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersPolicyService();
  const sm = new InventoryOrdersPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersPolicy Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
