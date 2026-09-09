import { InventoryOrdersSummaryService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersSummaryService";
import { InventoryOrdersSummaryValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersSummary";
import { InventoryOrdersSummaryStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersSummaryStateMachine";

describe("InventoryOrdersSummary Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersSummaryService();
  const sm = new InventoryOrdersSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersSummary Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
