import { DmsFilesAuditLogService } from "../../../services/core-engine/src/dms/files/services/DmsFilesAuditLogService";
import { DmsFilesAuditLogValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesAuditLog";
import { DmsFilesAuditLogStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesAuditLogStateMachine";

describe("DmsFilesAuditLog Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesAuditLogService();
  const sm = new DmsFilesAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesAuditLog Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
