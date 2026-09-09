import { CrmTerritoryPolicyService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritoryPolicyService";
import { CrmTerritoryPolicyValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritoryPolicy";
import { CrmTerritoryPolicyStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritoryPolicyStateMachine";

describe("CrmTerritoryPolicy Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritoryPolicyService();
  const sm = new CrmTerritoryPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritoryPolicy Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritoryPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
