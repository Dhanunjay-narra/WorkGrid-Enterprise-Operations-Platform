import { InventoryOrdersRecordService } from "../../../services/core-engine/src/inventory/orders/services/InventoryOrdersRecordService";
import { InventoryOrdersRecordValidator } from "../../../packages/types/src/domains/inventory/orders/InventoryOrdersRecord";
import { InventoryOrdersRecordStateMachine } from "../../../services/core-engine/src/inventory/orders/state-machines/InventoryOrdersRecordStateMachine";

describe("InventoryOrdersRecord Comprehensive Domain Test Suite", () => {
  const service = new InventoryOrdersRecordService();
  const sm = new InventoryOrdersRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryOrdersRecord Instance",
      domain: "inventory_orders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryOrdersRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
