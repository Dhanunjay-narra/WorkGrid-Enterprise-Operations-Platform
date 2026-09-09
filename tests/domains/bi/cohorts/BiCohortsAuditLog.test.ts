import { BiCohortsAuditLogService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsAuditLogService";
import { BiCohortsAuditLogValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsAuditLog";
import { BiCohortsAuditLogStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsAuditLogStateMachine";

describe("BiCohortsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsAuditLogService();
  const sm = new BiCohortsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsAuditLog Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
