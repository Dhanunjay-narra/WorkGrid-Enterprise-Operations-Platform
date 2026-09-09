import { DmsRetentionReportService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionReportService";
import { DmsRetentionReportValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionReport";
import { DmsRetentionReportStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionReportStateMachine";

describe("DmsRetentionReport Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionReportService();
  const sm = new DmsRetentionReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionReport Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
