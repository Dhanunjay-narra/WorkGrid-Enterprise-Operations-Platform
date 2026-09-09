import { CrmLeadsRecordService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsRecordService";
import { CrmLeadsRecordValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsRecord";
import { CrmLeadsRecordStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsRecordStateMachine";

describe("CrmLeadsRecord Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsRecordService();
  const sm = new CrmLeadsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsRecord Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
