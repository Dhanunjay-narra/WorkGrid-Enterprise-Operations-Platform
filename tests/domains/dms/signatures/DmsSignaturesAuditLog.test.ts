import { DmsSignaturesAuditLogService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesAuditLogService";
import { DmsSignaturesAuditLogValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesAuditLog";
import { DmsSignaturesAuditLogStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesAuditLogStateMachine";

describe("DmsSignaturesAuditLog Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesAuditLogService();
  const sm = new DmsSignaturesAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesAuditLog Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
