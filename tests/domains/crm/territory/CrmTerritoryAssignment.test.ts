import { CrmTerritoryAssignmentService } from "../../../services/core-engine/src/crm/territory/services/CrmTerritoryAssignmentService";
import { CrmTerritoryAssignmentValidator } from "../../../packages/types/src/domains/crm/territory/CrmTerritoryAssignment";
import { CrmTerritoryAssignmentStateMachine } from "../../../services/core-engine/src/crm/territory/state-machines/CrmTerritoryAssignmentStateMachine";

describe("CrmTerritoryAssignment Comprehensive Domain Test Suite", () => {
  const service = new CrmTerritoryAssignmentService();
  const sm = new CrmTerritoryAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmTerritoryAssignment Instance",
      domain: "crm_territory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmTerritoryAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
