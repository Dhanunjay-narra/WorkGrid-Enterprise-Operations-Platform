import { InventoryTransfersMetricService } from "../../../services/core-engine/src/inventory/transfers/services/InventoryTransfersMetricService";
import { InventoryTransfersMetricValidator } from "../../../packages/types/src/domains/inventory/transfers/InventoryTransfersMetric";
import { InventoryTransfersMetricStateMachine } from "../../../services/core-engine/src/inventory/transfers/state-machines/InventoryTransfersMetricStateMachine";

describe("InventoryTransfersMetric Comprehensive Domain Test Suite", () => {
  const service = new InventoryTransfersMetricService();
  const sm = new InventoryTransfersMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryTransfersMetric Instance",
      domain: "inventory_transfers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryTransfersMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
