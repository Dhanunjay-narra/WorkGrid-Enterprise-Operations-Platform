import { InventorySkuReportService } from "../../../services/core-engine/src/inventory/sku/services/InventorySkuReportService";
import { InventorySkuReportValidator } from "../../../packages/types/src/domains/inventory/sku/InventorySkuReport";
import { InventorySkuReportStateMachine } from "../../../services/core-engine/src/inventory/sku/state-machines/InventorySkuReportStateMachine";

describe("InventorySkuReport Comprehensive Domain Test Suite", () => {
  const service = new InventorySkuReportService();
  const sm = new InventorySkuReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySkuReport Instance",
      domain: "inventory_sku",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySkuReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
