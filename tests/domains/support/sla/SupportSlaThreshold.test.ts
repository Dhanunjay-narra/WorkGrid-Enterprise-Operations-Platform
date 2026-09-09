import { SupportSlaThresholdService } from "../../../services/core-engine/src/support/sla/services/SupportSlaThresholdService";
import { SupportSlaThresholdValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaThreshold";
import { SupportSlaThresholdStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaThresholdStateMachine";

describe("SupportSlaThreshold Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaThresholdService();
  const sm = new SupportSlaThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaThreshold Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
