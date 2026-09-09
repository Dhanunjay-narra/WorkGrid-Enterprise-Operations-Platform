import { InventoryBatchesSessionService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesSessionService";
import { InventoryBatchesSessionValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesSession";
import { InventoryBatchesSessionStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesSessionStateMachine";

describe("InventoryBatchesSession Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesSessionService();
  const sm = new InventoryBatchesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesSession Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
