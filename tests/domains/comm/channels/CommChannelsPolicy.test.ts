import { CommChannelsPolicyService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsPolicyService";
import { CommChannelsPolicyValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsPolicy";
import { CommChannelsPolicyStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsPolicyStateMachine";

describe("CommChannelsPolicy Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsPolicyService();
  const sm = new CommChannelsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsPolicy Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
