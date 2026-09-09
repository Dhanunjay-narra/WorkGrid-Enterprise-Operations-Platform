import { ComplianceNodeService } from "../../../services/core-engine/src/compliance/services/ComplianceNodeService";
import { ComplianceNodeValidator } from "../../../packages/types/src/domains/compliance/ComplianceNode";
import { ComplianceNodeStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceNodeStateMachine";

describe("ComplianceNode Comprehensive Domain Test Suite", () => {
  const service = new ComplianceNodeService();
  const sm = new ComplianceNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceNode Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
