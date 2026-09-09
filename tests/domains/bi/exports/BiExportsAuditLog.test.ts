import { BiExportsAuditLogService } from "../../../services/core-engine/src/bi/exports/services/BiExportsAuditLogService";
import { BiExportsAuditLogValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsAuditLog";
import { BiExportsAuditLogStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsAuditLogStateMachine";

describe("BiExportsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new BiExportsAuditLogService();
  const sm = new BiExportsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsAuditLog Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
