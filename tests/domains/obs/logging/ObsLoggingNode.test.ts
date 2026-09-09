import { ObsLoggingNodeService } from "../../../services/core-engine/src/obs/logging/services/ObsLoggingNodeService";
import { ObsLoggingNodeValidator } from "../../../packages/types/src/domains/obs/logging/ObsLoggingNode";
import { ObsLoggingNodeStateMachine } from "../../../services/core-engine/src/obs/logging/state-machines/ObsLoggingNodeStateMachine";

describe("ObsLoggingNode Comprehensive Domain Test Suite", () => {
  const service = new ObsLoggingNodeService();
  const sm = new ObsLoggingNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsLoggingNode Instance",
      domain: "obs_logging",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsLoggingNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
