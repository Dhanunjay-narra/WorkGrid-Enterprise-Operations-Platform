import { InventorySkuRecordService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuRecordService";
import { InventorySkuRecordValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuRecord";
import { InventorySkuRecordStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuRecordStateMachine";

describe("InventorySkuRecord Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuRecordService();
  const sm = new InventorySkuRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuRecord Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
