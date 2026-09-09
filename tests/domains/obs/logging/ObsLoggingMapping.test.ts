import { ObsLoggingMappingService } from "../../../services/core-engine/src/obs/logging/services/ObsLoggingMappingService";
import { ObsLoggingMappingValidator } from "../../../packages/types/src/domains/obs/logging/ObsLoggingMapping";
import { ObsLoggingMappingStateMachine } from "../../../services/core-engine/src/obs/logging/state-machines/ObsLoggingMappingStateMachine";

describe("ObsLoggingMapping Comprehensive Domain Test Suite", () => {
  const service = new ObsLoggingMappingService();
  const sm = new ObsLoggingMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsLoggingMapping Instance",
      domain: "obs_logging",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsLoggingMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
