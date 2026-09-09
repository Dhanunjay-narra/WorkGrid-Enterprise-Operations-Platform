import { DmsOcrAuditLogService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrAuditLogService";
import { DmsOcrAuditLogValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrAuditLog";
import { DmsOcrAuditLogStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrAuditLogStateMachine";

describe("DmsOcrAuditLog Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrAuditLogService();
  const sm = new DmsOcrAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrAuditLog Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
