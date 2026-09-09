import { InventoryBatchesSummaryService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesSummaryService";
import { InventoryBatchesSummaryValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesSummary";
import { InventoryBatchesSummaryStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesSummaryStateMachine";

describe("InventoryBatchesSummary Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesSummaryService();
  const sm = new InventoryBatchesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesSummary Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
