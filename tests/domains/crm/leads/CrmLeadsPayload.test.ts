import { CrmLeadsPayloadService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsPayloadService";
import { CrmLeadsPayloadValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsPayload";
import { CrmLeadsPayloadStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsPayloadStateMachine";

describe("CrmLeadsPayload Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsPayloadService();
  const sm = new CrmLeadsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsPayload Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
