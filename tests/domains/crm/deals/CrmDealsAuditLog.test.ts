import { CrmDealsAuditLogService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsAuditLogService";
import { CrmDealsAuditLogValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsAuditLog";
import { CrmDealsAuditLogStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsAuditLogStateMachine";

describe("CrmDealsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsAuditLogService();
  const sm = new CrmDealsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsAuditLog Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
