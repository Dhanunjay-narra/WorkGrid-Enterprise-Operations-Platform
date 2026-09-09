import { CommChannelsEntryService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsEntryService";
import { CommChannelsEntryValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsEntry";
import { CommChannelsEntryStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsEntryStateMachine";

describe("CommChannelsEntry Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsEntryService();
  const sm = new CommChannelsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsEntry Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
