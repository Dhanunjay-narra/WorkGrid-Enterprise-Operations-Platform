import { CommChannelsRuleService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsRuleService";
import { CommChannelsRuleValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsRule";
import { CommChannelsRuleStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsRuleStateMachine";

describe("CommChannelsRule Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsRuleService();
  const sm = new CommChannelsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsRule Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
