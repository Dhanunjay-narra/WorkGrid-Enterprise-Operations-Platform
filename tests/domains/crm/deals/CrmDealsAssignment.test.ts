import { CrmDealsAssignmentService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsAssignmentService";
import { CrmDealsAssignmentValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsAssignment";
import { CrmDealsAssignmentStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsAssignmentStateMachine";

describe("CrmDealsAssignment Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsAssignmentService();
  const sm = new CrmDealsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsAssignment Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
