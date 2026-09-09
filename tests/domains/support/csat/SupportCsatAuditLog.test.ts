import { SupportCsatAuditLogService } from "../../../services/core-engine/src/support/csat/services/SupportCsatAuditLogService";
import { SupportCsatAuditLogValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatAuditLog";
import { SupportCsatAuditLogStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatAuditLogStateMachine";

describe("SupportCsatAuditLog Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatAuditLogService();
  const sm = new SupportCsatAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatAuditLog Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
