import { CommChannelsNodeService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsNodeService";
import { CommChannelsNodeValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsNode";
import { CommChannelsNodeStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsNodeStateMachine";

describe("CommChannelsNode Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsNodeService();
  const sm = new CommChannelsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsNode Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
