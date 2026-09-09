import { InventoryReorderPayloadService } from "../../../services/core-engine/src/inventory/reorder/services/InventoryReorderPayloadService";
import { InventoryReorderPayloadValidator } from "../../../packages/types/src/domains/inventory/reorder/InventoryReorderPayload";
import { InventoryReorderPayloadStateMachine } from "../../../services/core-engine/src/inventory/reorder/state-machines/InventoryReorderPayloadStateMachine";

describe("InventoryReorderPayload Comprehensive Domain Test Suite", () => {
  const service = new InventoryReorderPayloadService();
  const sm = new InventoryReorderPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryReorderPayload Instance",
      domain: "inventory_reorder",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryReorderPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
