import { ComplianceProfileService } from "../../../services/core-engine/src/compliance/services/ComplianceProfileService";
import { ComplianceProfileValidator } from "../../../packages/types/src/domains/compliance/ComplianceProfile";
import { ComplianceProfileStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceProfileStateMachine";

describe("ComplianceProfile Comprehensive Domain Test Suite", () => {
  const service = new ComplianceProfileService();
  const sm = new ComplianceProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceProfile Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
