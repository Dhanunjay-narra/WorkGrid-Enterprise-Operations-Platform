import { CommMessagesReportService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesReportService";
import { CommMessagesReportValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesReport";
import { CommMessagesReportStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesReportStateMachine";

describe("CommMessagesReport Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesReportService();
  const sm = new CommMessagesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesReport Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
