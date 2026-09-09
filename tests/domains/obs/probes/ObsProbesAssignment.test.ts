import { ObsProbesAssignmentService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesAssignmentService";
import { ObsProbesAssignmentValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesAssignment";
import { ObsProbesAssignmentStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesAssignmentStateMachine";

describe("ObsProbesAssignment Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesAssignmentService();
  const sm = new ObsProbesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesAssignment Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
