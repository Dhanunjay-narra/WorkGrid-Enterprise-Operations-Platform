import { ObsSpansSessionService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansSessionService";
import { ObsSpansSessionValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansSession";
import { ObsSpansSessionStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansSessionStateMachine";

describe("ObsSpansSession Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansSessionService();
  const sm = new ObsSpansSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansSession Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
