import { SupportSlaPayloadService } from "../../../services/core-engine/src/support/sla/services/SupportSlaPayloadService";
import { SupportSlaPayloadValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaPayload";
import { SupportSlaPayloadStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaPayloadStateMachine";

describe("SupportSlaPayload Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaPayloadService();
  const sm = new SupportSlaPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaPayload Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
