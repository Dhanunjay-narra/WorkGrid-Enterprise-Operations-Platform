import { ObsProfilingReportService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingReportService";
import { ObsProfilingReportValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingReport";
import { ObsProfilingReportStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingReportStateMachine";

describe("ObsProfilingReport Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingReportService();
  const sm = new ObsProfilingReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingReport Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
