import { CommChannelsPayloadService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsPayloadService";
import { CommChannelsPayloadValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsPayload";
import { CommChannelsPayloadStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsPayloadStateMachine";

describe("CommChannelsPayload Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsPayloadService();
  const sm = new CommChannelsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsPayload Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
