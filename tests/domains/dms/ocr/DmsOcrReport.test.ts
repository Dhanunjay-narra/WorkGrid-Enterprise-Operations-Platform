import { DmsOcrReportService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrReportService";
import { DmsOcrReportValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrReport";
import { DmsOcrReportStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrReportStateMachine";

describe("DmsOcrReport Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrReportService();
  const sm = new DmsOcrReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrReport Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
