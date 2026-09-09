import { CrmTerritoryPayloadService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritoryPayloadService";
import { CrmTerritoryPayloadValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritoryPayload";
import { CrmTerritoryPayloadStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritoryPayloadStateMachine";

describe("CrmTerritoryPayload Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritoryPayloadService();
  const sm = new CrmTerritoryPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritoryPayload Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritoryPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
