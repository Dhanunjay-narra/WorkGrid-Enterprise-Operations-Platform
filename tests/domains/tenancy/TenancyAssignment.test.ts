import { TenancyAssignmentService } from "../../../services/core-engine/src/tenancy/services/TenancyAssignmentService";
import { TenancyAssignmentValidator } from "../../../packages/types/src/domains/tenancy/TenancyAssignment";
import { TenancyAssignmentStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyAssignmentStateMachine";

describe("TenancyAssignment Comprehensive Domain Test Suite", () => {
  const service = new TenancyAssignmentService();
  const sm = new TenancyAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyAssignment Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
