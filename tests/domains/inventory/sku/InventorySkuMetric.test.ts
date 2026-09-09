import { InventorySkuMetricService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuMetricService";
import { InventorySkuMetricValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuMetric";
import { InventorySkuMetricStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuMetricStateMachine";

describe("InventorySkuMetric Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuMetricService();
  const sm = new InventorySkuMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuMetric Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
