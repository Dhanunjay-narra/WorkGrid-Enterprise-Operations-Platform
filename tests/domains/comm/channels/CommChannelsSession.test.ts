import { CommChannelsSessionService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsSessionService";
import { CommChannelsSessionValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsSession";
import { CommChannelsSessionStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsSessionStateMachine";

describe("CommChannelsSession Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsSessionService();
  const sm = new CommChannelsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsSession Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
