import { InventoryStockMetricService } from "../../../services/core-engine/src/inventory/stock/services/InventoryStockMetricService";
import { InventoryStockMetricValidator } from "../../../packages/types/src/domains/inventory/stock/InventoryStockMetric";
import { InventoryStockMetricStateMachine } from "../../../services/core-engine/src/inventory/stock/state-machines/InventoryStockMetricStateMachine";

describe("InventoryStockMetric Comprehensive Domain Test Suite", () => {
  const service = new InventoryStockMetricService();
  const sm = new InventoryStockMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryStockMetric Instance",
      domain: "inventory_stock",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryStockMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
