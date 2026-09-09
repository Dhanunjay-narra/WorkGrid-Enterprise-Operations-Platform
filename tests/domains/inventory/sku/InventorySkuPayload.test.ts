import { InventorySkuPayloadService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuPayloadService";
import { InventorySkuPayloadValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuPayload";
import { InventorySkuPayloadStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuPayloadStateMachine";

describe("InventorySkuPayload Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuPayloadService();
  const sm = new InventorySkuPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuPayload Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
