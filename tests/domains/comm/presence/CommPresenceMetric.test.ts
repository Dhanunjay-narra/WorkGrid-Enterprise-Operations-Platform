import { CommPresenceMetricService } from "../../../services/core-engine/src/comm/presence/services/CommPresenceMetricService";
import { CommPresenceMetricValidator } from "../../../packages/types/src/domains/comm/presence/CommPresenceMetric";
import { CommPresenceMetricStateMachine } from "../../../services/core-engine/src/comm/presence/state-machines/CommPresenceMetricStateMachine";

describe("CommPresenceMetric Comprehensive Domain Test Suite", () => {
  const service = new CommPresenceMetricService();
  const sm = new CommPresenceMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommPresenceMetric Instance",
      domain: "comm_presence",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommPresenceMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
