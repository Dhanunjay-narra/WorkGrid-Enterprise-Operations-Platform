import { InventorySuppliersScheduleService } from "../../../services/core-engine/src/inventory/suppliers/services/InventorySuppliersScheduleService";
import { InventorySuppliersScheduleValidator } from "../../../packages/types/src/domains/inventory/suppliers/InventorySuppliersSchedule";
import { InventorySuppliersScheduleStateMachine } from "../../../services/core-engine/src/inventory/suppliers/state-machines/InventorySuppliersScheduleStateMachine";

describe("InventorySuppliersSchedule Comprehensive Domain Test Suite", () => {
  const service = new InventorySuppliersScheduleService();
  const sm = new InventorySuppliersScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "InventorySuppliersSchedule Instance",
      domain: "inventory_suppliers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = InventorySuppliersScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
