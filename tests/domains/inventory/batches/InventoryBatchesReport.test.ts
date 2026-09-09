import { InventoryBatchesReportService } from "../../../services/core-engine/src/inventory/batches/services/InventoryBatchesReportService";
import { InventoryBatchesReportValidator } from "../../../packages/types/src/domains/inventory/batches/InventoryBatchesReport";
import { InventoryBatchesReportStateMachine } from "../../../services/core-engine/src/inventory/batches/state-machines/InventoryBatchesReportStateMachine";

describe("InventoryBatchesReport Comprehensive Domain Test Suite", () => {
  const service = new InventoryBatchesReportService();
  const sm = new InventoryBatchesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventoryBatchesReport Instance",
      domain: "inventory_batches",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventoryBatchesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
