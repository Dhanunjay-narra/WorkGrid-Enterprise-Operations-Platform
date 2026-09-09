import { InventoryReorderMetricService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderMetricService";
import { InventoryReorderMetricValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderMetric";
import { InventoryReorderMetricStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderMetricStateMachine";

describe("InventoryReorderMetric Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderMetricService();
  const sm = new InventoryReorderMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderMetric Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
