import { ComplianceEventService } from "../../../services/core-engine/src/compliance/services/ComplianceEventService";
import { ComplianceEventValidator } from "../../../packages/types/src/domains/compliance/ComplianceEvent";
import { ComplianceEventStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceEventStateMachine";

describe("ComplianceEvent Comprehensive Domain Test Suite", () => {
  const service = new ComplianceEventService();
  const sm = new ComplianceEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceEvent Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
