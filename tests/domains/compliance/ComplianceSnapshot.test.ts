import { ComplianceSnapshotService } from "../../../services/core-engine/src/compliance/services/ComplianceSnapshotService";
import { ComplianceSnapshotValidator } from "../../../packages/types/src/domains/compliance/ComplianceSnapshot";
import { ComplianceSnapshotStateMachine } from "../../../services/core-engine/src/compliance/state-machines/ComplianceSnapshotStateMachine";

describe("ComplianceSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ComplianceSnapshotService();
  const sm = new ComplianceSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ComplianceSnapshot Instance",
      domain: "compliance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ComplianceSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
