import { CrmTerritoryConfigService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritoryConfigService";
import { CrmTerritoryConfigValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritoryConfig";
import { CrmTerritoryConfigStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritoryConfigStateMachine";

describe("CrmTerritoryConfig Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritoryConfigService();
  const sm = new CrmTerritoryConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritoryConfig Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritoryConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
