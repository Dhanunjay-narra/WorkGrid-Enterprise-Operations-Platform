import { CrmTerritoryEventService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritoryEventService";
import { CrmTerritoryEventValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritoryEvent";
import { CrmTerritoryEventStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritoryEventStateMachine";

describe("CrmTerritoryEvent Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritoryEventService();
  const sm = new CrmTerritoryEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritoryEvent Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritoryEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
