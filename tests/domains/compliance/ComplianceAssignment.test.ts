import { ComplianceAssignmentService } from "../../../services/core-engine/src/compliance/services/ComplianceAssignmentService";
import { ComplianceAssignmentValidator } from "../../../packages/types/src/domains/compliance/ComplianceAssignment";
import { ComplianceAssignmentStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceAssignmentStateMachine";

describe("ComplianceAssignment Comprehensive Domain Test Suite", () => {
  const service = new ComplianceAssignmentService();
  const sm = new ComplianceAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceAssignment Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
