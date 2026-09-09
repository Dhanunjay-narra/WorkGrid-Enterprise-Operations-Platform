import { CommChannelsSnapshotService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsSnapshotService";
import { CommChannelsSnapshotValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsSnapshot";
import { CommChannelsSnapshotStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsSnapshotStateMachine";

describe("CommChannelsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsSnapshotService();
  const sm = new CommChannelsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsSnapshot Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
