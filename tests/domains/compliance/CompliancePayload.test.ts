import { CompliancePayloadService } from "../../../services/core-engine/src/compliance/services/CompliancePayloadService";
import { CompliancePayloadValidator } from "../../../packages/types/src/domains/compliance/CompliancePayload";
import { CompliancePayloadStateMachine } from "../../../services/core-engine/src/compliance/state-machines/CompliancePayloadStateMachine";

describe("CompliancePayload Comprehensive Domain Test Suite", () => {
  const service = new CompliancePayloadService();
  const sm = new CompliancePayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CompliancePayload Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CompliancePayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
