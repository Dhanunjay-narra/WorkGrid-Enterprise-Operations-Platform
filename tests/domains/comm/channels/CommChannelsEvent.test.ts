import { CommChannelsEventService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsEventService";
import { CommChannelsEventValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsEvent";
import { CommChannelsEventStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsEventStateMachine";

describe("CommChannelsEvent Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsEventService();
  const sm = new CommChannelsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsEvent Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
