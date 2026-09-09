import { SupportCsatEventService } from "../../../services/core-engine/src/support/csat/services/SupportCsatEventService";
import { SupportCsatEventValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatEvent";
import { SupportCsatEventStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatEventStateMachine";

describe("SupportCsatEvent Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatEventService();
  const sm = new SupportCsatEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatEvent Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
