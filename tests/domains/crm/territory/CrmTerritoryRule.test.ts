import { CrmTerritoryRuleService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritoryRuleService";
import { CrmTerritoryRuleValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritoryRule";
import { CrmTerritoryRuleStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritoryRuleStateMachine";

describe("CrmTerritoryRule Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritoryRuleService();
  const sm = new CrmTerritoryRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritoryRule Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritoryRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
