import { ObsLoggingRecordService } from "../../../services/core-engine/src/obs/logging/services/ObsLoggingRecordService";
import { ObsLoggingRecordValidator } from "../../../packages/types/src/domains/obs/logging/ObsLoggingRecord";
import { ObsLoggingRecordStateMachine } from "../../../services/core-engine/src/obs/logging/state-machines/ObsLoggingRecordStateMachine";

describe("ObsLoggingRecord Comprehensive Domain Test Suite", () => {
  const service = new ObsLoggingRecordService();
  const sm = new ObsLoggingRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsLoggingRecord Instance",
      domain: "obs_logging",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsLoggingRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
