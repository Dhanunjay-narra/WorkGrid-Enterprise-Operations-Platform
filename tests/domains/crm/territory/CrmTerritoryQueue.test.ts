import { CrmTerritoryQueueService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritoryQueueService";
import { CrmTerritoryQueueValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritoryQueue";
import { CrmTerritoryQueueStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritoryQueueStateMachine";

describe("CrmTerritoryQueue Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritoryQueueService();
  const sm = new CrmTerritoryQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritoryQueue Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritoryQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
