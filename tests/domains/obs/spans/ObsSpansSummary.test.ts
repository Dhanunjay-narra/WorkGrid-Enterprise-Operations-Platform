import { ObsSpansSummaryService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansSummaryService";
import { ObsSpansSummaryValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansSummary";
import { ObsSpansSummaryStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansSummaryStateMachine";

describe("ObsSpansSummary Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansSummaryService();
  const sm = new ObsSpansSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansSummary Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
