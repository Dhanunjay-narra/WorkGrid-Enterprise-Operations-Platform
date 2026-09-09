import { DmsExportSummaryService } from "../../../services/core-engine/src/dms/export/services/DmsExportSummaryService";
import { DmsExportSummaryValidator } from "../../../packages/types/src/domains/dms/export/DmsExportSummary";
import { DmsExportSummaryStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportSummaryStateMachine";

describe("DmsExportSummary Comprehensive Domain Test Suite", () => {
  const service = new DmsExportSummaryService();
  const sm = new DmsExportSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportSummary Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
