import { CommMessagesMappingService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesMappingService";
import { CommMessagesMappingValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesMapping";
import { CommMessagesMappingStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesMappingStateMachine";

describe("CommMessagesMapping Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesMappingService();
  const sm = new CommMessagesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesMapping Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
