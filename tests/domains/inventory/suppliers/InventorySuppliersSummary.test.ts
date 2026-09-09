import { InventorySuppliersSummaryService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersSummaryService";
import { InventorySuppliersSummaryValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersSummary";
import { InventorySuppliersSummaryStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersSummaryStateMachine";

describe("InventorySuppliersSummary Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersSummaryService();
  const sm = new InventorySuppliersSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersSummary Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
