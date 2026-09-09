import { CompliancePolicyService } from "../../../services/core-engine/src/compliance/services/CompliancePolicyService";
import { CompliancePolicyValidator } from "../../../packages/types/src/domains/compliance/CompliancePolicy";
import { CompliancePolicyStateMachine } from "../../../services/core-engine/src/compliance/state-machines/CompliancePolicyStateMachine";

describe("CompliancePolicy Comprehensive Domain Test Suite", () => {
  const service = new CompliancePolicyService();
  const sm = new CompliancePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CompliancePolicy Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CompliancePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
