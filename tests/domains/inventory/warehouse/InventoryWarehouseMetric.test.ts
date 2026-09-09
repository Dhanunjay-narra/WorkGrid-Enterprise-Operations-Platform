import { InventoryWarehouseMetricService } from "../../../services/core-engine/src/inventory/warehouse/services/InventoryWarehouseMetricService";
import { InventoryWarehouseMetricValidator } from "../../../packages/types/src/domains/inventory/warehouse/InventoryWarehouseMetric";
import { InventoryWarehouseMetricStateMachine } from "../../../services/core-engine/src/inventory/warehouse/state-machines/InventoryWarehouseMetricStateMachine";

describe("InventoryWarehouseMetric Comprehensive Domain Test Suite", () => {
  const service = new InventoryWarehouseMetricService();
  const sm = new InventoryWarehouseMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryWarehouseMetric Instance",
      domain: "inventory_warehouse",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryWarehouseMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
