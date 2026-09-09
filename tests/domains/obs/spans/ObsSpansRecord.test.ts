import { ObsSpansRecordService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansRecordService";
import { ObsSpansRecordValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansRecord";
import { ObsSpansRecordStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansRecordStateMachine";

describe("ObsSpansRecord Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansRecordService();
  const sm = new ObsSpansRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansRecord Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
