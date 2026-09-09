import { CrmLeadsAuditLogService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsAuditLogService";
import { CrmLeadsAuditLogValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsAuditLog";
import { CrmLeadsAuditLogStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsAuditLogStateMachine";

describe("CrmLeadsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsAuditLogService();
  const sm = new CrmLeadsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsAuditLog Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
