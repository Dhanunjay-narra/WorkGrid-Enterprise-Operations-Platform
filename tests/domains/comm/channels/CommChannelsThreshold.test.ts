import { CommChannelsThresholdService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsThresholdService";
import { CommChannelsThresholdValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsThreshold";
import { CommChannelsThresholdStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsThresholdStateMachine";

describe("CommChannelsThreshold Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsThresholdService();
  const sm = new CommChannelsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsThreshold Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
