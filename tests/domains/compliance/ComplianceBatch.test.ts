import { ComplianceBatchService } from "../../../services/core-engine/src/compliance/services/ComplianceBatchService";
import { ComplianceBatchValidator } from "../../../packages/types/src/domains/compliance/ComplianceBatch";
import { ComplianceBatchStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceBatchStateMachine";

describe("ComplianceBatch Comprehensive Domain Test Suite", () => {
  const service = new ComplianceBatchService();
  const sm = new ComplianceBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceBatch Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
