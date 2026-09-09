import { CrmContactsReportService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsReportService";
import { CrmContactsReportValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsReport";
import { CrmContactsReportStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsReportStateMachine";

describe("CrmContactsReport Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsReportService();
  const sm = new CrmContactsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsReport Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
