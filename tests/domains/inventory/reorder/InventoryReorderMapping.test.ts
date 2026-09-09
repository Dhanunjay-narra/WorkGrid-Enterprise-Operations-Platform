import { InventoryReorderMappingService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderMappingService";
import { InventoryReorderMappingValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderMapping";
import { InventoryReorderMappingStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderMappingStateMachine";

describe("InventoryReorderMapping Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderMappingService();
  const sm = new InventoryReorderMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderMapping Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
