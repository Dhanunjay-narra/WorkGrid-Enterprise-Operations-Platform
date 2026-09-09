import { ComplianceRuleService } from "../../../services/core-engine/src/compliance/services/ComplianceRuleService";
import { ComplianceRuleValidator } from "../../../packages/types/src/domains/compliance/ComplianceRule";
import { ComplianceRuleStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceRuleStateMachine";

describe("ComplianceRule Comprehensive Domain Test Suite", () => {
  const service = new ComplianceRuleService();
  const sm = new ComplianceRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceRule Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
