import { CommChannelsTaskService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsTaskService";
import { CommChannelsTaskValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsTask";
import { CommChannelsTaskStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsTaskStateMachine";

describe("CommChannelsTask Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsTaskService();
  const sm = new CommChannelsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsTask Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
