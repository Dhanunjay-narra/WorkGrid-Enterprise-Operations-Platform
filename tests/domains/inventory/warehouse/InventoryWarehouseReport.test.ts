import { InventoryWarehouseReportService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseReportService";
import { InventoryWarehouseReportValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseReport";
import { InventoryWarehouseReportStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseReportStateMachine";

describe("InventoryWarehouseReport Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseReportService();
  const sm = new InventoryWarehouseReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseReport Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
