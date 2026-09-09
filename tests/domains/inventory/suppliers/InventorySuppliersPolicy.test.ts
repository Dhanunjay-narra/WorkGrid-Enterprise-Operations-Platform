import { InventorySuppliersPolicyService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersPolicyService";
import { InventorySuppliersPolicyValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersPolicy";
import { InventorySuppliersPolicyStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersPolicyStateMachine";

describe("InventorySuppliersPolicy Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersPolicyService();
  const sm = new InventorySuppliersPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersPolicy Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
