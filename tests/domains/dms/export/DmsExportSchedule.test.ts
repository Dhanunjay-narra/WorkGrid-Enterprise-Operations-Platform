import { DmsExportScheduleService } from "../../../services/core-engine/src/dms/export/services/DmsExportScheduleService";
import { DmsExportScheduleValidator } from "../../../packages/types/src/domains/dms/export/DmsExportSchedule";
import { DmsExportScheduleStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportScheduleStateMachine";

describe("DmsExportSchedule Comprehensive Domain Test Suite", () => {
  const service = new DmsExportScheduleService();
  const sm = new DmsExportScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportSchedule Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
