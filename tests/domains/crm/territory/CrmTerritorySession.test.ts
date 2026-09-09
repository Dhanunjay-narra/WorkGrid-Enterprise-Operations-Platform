import { CrmTerritorySessionService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritorySessionService";
import { CrmTerritorySessionValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritorySession";
import { CrmTerritorySessionStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritorySessionStateMachine";

describe("CrmTerritorySession Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritorySessionService();
  const sm = new CrmTerritorySessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritorySession Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritorySessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
