import { ObsTracingPayloadService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingPayloadService";
import { ObsTracingPayloadValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingPayload";
import { ObsTracingPayloadStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingPayloadStateMachine";

describe("ObsTracingPayload Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingPayloadService();
  const sm = new ObsTracingPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingPayload Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
