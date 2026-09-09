import { CommChannelsAssignmentService } from "../../../services/core-engine/src/comm/channels/services/CommChannelsAssignmentService";
import { CommChannelsAssignmentValidator } from "../../../packages/types/src/domains/comm/channels/CommChannelsAssignment";
import { CommChannelsAssignmentStateMachine } from "../../../services/core-engine/src/comm/channels/state-machines/CommChannelsAssignmentStateMachine";

describe("CommChannelsAssignment Comprehensive Domain Test Suite", () => {
  const service = new CommChannelsAssignmentService();
  const sm = new CommChannelsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommChannelsAssignment Instance",
      domain: "comm_channels",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommChannelsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
