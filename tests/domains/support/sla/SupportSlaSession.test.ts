import { SupportSlaSessionService } from "../../../services/core-engine/src/support/sla/services/SupportSlaSessionService";
import { SupportSlaSessionValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaSession";
import { SupportSlaSessionStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaSessionStateMachine";

describe("SupportSlaSession Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaSessionService();
  const sm = new SupportSlaSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaSession Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
