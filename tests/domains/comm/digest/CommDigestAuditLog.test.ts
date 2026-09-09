import { CommDigestAuditLogService } from "../../../services/core-engine/src/comm/digest/services/CommDigestAuditLogService";
import { CommDigestAuditLogValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestAuditLog";
import { CommDigestAuditLogStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestAuditLogStateMachine";

describe("CommDigestAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CommDigestAuditLogService();
  const sm = new CommDigestAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestAuditLog Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
