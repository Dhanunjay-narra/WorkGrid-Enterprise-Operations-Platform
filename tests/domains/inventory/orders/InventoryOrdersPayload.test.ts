import { InventoryOrdersPayloadService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersPayloadService";
import { InventoryOrdersPayloadValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersPayload";
import { InventoryOrdersPayloadStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersPayloadStateMachine";

describe("InventoryOrdersPayload Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersPayloadService();
  const sm = new InventoryOrdersPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersPayload Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
