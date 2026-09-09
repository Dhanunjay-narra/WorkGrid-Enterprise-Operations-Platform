import { InventoryOrdersConfigService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersConfigService";
import { InventoryOrdersConfigValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersConfig";
import { InventoryOrdersConfigStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersConfigStateMachine";

describe("InventoryOrdersConfig Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersConfigService();
  const sm = new InventoryOrdersConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersConfig Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
