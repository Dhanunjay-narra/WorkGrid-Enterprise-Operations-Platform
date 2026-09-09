import { ComplianceSessionService } from "../../../services/core-engine/src/compliance/services/ComplianceSessionService";
import { ComplianceSessionValidator } from "../../../packages/types/src/domains/compliance/ComplianceSession";
import { ComplianceSessionStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceSessionStateMachine";

describe("ComplianceSession Comprehensive Domain Test Suite", () => {
  const service = new ComplianceSessionService();
  const sm = new ComplianceSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceSession Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
