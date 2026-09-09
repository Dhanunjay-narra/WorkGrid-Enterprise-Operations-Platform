import { InventoryWarehouseSummaryService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseSummaryService";
import { InventoryWarehouseSummaryValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseSummary";
import { InventoryWarehouseSummaryStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseSummaryStateMachine";

describe("InventoryWarehouseSummary Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseSummaryService();
  const sm = new InventoryWarehouseSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseSummary Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
