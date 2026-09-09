import { CrmContactsMetricService } from "../../../services/core-engine/src/crm/contacts/services/CrmContactsMetricService";
import { CrmContactsMetricValidator } from "../../../packages/types/src/domains/crm/contacts/CrmContactsMetric";
import { CrmContactsMetricStateMachine } from "../../../services/core-engine/src/crm/contacts/state-machines/CrmContactsMetricStateMachine";

describe("CrmContactsMetric Comprehensive Domain Test Suite", () => {
  const service = new CrmContactsMetricService();
  const sm = new CrmContactsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmContactsMetric Instance",
      domain: "crm_contacts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmContactsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
