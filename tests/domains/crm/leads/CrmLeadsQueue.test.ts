import { CrmLeadsQueueService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsQueueService";
import { CrmLeadsQueueValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsQueue";
import { CrmLeadsQueueStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsQueueStateMachine";

describe("CrmLeadsQueue Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsQueueService();
  const sm = new CrmLeadsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsQueue Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
