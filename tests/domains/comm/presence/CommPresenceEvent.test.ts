import { CommPresenceEventService } from "../../../services/core-engine/src/comm/presence/services/CommPresenceEventService";
import { CommPresenceEventValidator } from "../../../packages/types/src/domains/comm/presence/CommPresenceEvent";
import { CommPresenceEventStateMachine } from "../../../services/core-engine/src/comm/presence/state-machines/CommPresenceEventStateMachine";

describe("CommPresenceEvent Comprehensive Domain Test Suite", () => {
  const service = new CommPresenceEventService();
  const sm = new CommPresenceEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommPresenceEvent Instance",
      domain: "comm_presence",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommPresenceEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
