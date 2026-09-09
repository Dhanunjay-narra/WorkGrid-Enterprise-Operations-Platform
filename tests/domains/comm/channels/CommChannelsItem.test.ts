import { CommChannelsItemService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsItemService";
import { CommChannelsItemValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsItem";
import { CommChannelsItemStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsItemStateMachine";

describe("CommChannelsItem Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsItemService();
  const sm = new CommChannelsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsItem Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
