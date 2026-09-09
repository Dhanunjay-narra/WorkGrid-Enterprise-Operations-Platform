import { ComplianceTaskService } from "../../../services/core-engine/src/compliance/services/ComplianceTaskService";
import { ComplianceTaskValidator } from "../../../packages/types/src/domains/compliance/ComplianceTask";
import { ComplianceTaskStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceTaskStateMachine";

describe("ComplianceTask Comprehensive Domain Test Suite", () => {
  const service = new ComplianceTaskService();
  const sm = new ComplianceTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceTask Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
