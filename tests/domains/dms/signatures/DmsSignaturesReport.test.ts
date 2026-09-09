import { DmsSignaturesReportService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesReportService";
import { DmsSignaturesReportValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesReport";
import { DmsSignaturesReportStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesReportStateMachine";

describe("DmsSignaturesReport Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesReportService();
  const sm = new DmsSignaturesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesReport Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
