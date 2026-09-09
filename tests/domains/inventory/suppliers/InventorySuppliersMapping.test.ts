import { InventorySuppliersMappingService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersMappingService";
import { InventorySuppliersMappingValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersMapping";
import { InventorySuppliersMappingStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersMappingStateMachine";

describe("InventorySuppliersMapping Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersMappingService();
  const sm = new InventorySuppliersMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersMapping Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
