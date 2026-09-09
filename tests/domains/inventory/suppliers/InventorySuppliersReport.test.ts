import { InventorySuppliersReportService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersReportService";
import { InventorySuppliersReportValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersReport";
import { InventorySuppliersReportStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersReportStateMachine";

describe("InventorySuppliersReport Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersReportService();
  const sm = new InventorySuppliersReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersReport Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
