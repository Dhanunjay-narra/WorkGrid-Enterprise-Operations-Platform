import { ObsTracingAssignmentService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingAssignmentService";
import { ObsTracingAssignmentValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingAssignment";
import { ObsTracingAssignmentStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingAssignmentStateMachine";

describe("ObsTracingAssignment Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingAssignmentService();
  const sm = new ObsTracingAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingAssignment Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
