import { ObsSpansReportService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansReportService";
import { ObsSpansReportValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansReport";
import { ObsSpansReportStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansReportStateMachine";

describe("ObsSpansReport Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansReportService();
  const sm = new ObsSpansReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansReport Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
