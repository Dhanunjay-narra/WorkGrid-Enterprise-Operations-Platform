import { CommChannelsStateService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsStateService";
import { CommChannelsStateValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsState";
import { CommChannelsStateStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsStateStateMachine";

describe("CommChannelsState Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsStateService();
  const sm = new CommChannelsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsState Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
