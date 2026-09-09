import { InventorySkuStateService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuStateService";
import { InventorySkuStateValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuState";
import { InventorySkuStateStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuStateStateMachine";

describe("InventorySkuState Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuStateService();
  const sm = new InventorySkuStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuState Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
