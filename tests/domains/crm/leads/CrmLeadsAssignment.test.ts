import { CrmLeadsAssignmentService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsAssignmentService";
import { CrmLeadsAssignmentValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsAssignment";
import { CrmLeadsAssignmentStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsAssignmentStateMachine";

describe("CrmLeadsAssignment Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsAssignmentService();
  const sm = new CrmLeadsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsAssignment Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
