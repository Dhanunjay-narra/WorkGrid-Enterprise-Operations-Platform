import { CrmHealthAssignmentService } from "../../../services/core-engine/src/crm/health/services/CrmHealthAssignmentService";
import { CrmHealthAssignmentValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthAssignment";
import { CrmHealthAssignmentStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthAssignmentStateMachine";

describe("CrmHealthAssignment Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthAssignmentService();
  const sm = new CrmHealthAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthAssignment Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
