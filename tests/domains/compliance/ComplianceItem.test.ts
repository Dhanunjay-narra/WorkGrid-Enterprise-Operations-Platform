import { ComplianceItemService } from "../../../services/core-engine/src/compliance/services/ComplianceItemService";
import { ComplianceItemValidator } from "../../../packages/types/src/domains/compliance/ComplianceItem";
import { ComplianceItemStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceItemStateMachine";

describe("ComplianceItem Comprehensive Domain Test Suite", () => {
  const service = new ComplianceItemService();
  const sm = new ComplianceItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceItem Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
