import { ObsLoggingSessionService } from "../../../services/core-engine/src/obs/logging/services/ObsLoggingSessionService";
import { ObsLoggingSessionValidator } from "../../../packages/types/src/domains/obs/logging/ObsLoggingSession";
import { ObsLoggingSessionStateMachine } from "../../../services/core-engine/src/obs/logging/state-machines/ObsLoggingSessionStateMachine";

describe("ObsLoggingSession Comprehensive Domain Test Suite", () => {
  const service = new ObsLoggingSessionService();
  const sm = new ObsLoggingSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsLoggingSession Instance",
      domain: "obs_logging",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsLoggingSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
