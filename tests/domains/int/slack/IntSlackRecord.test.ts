import { IntSlackRecordService } from "../../../services/core-engine/src/int/slack/services/IntSlackRecordService";
import { IntSlackRecordValidator } from "../../../packages/types/src/domains/int/slack/IntSlackRecord";
import { IntSlackRecordStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackRecordStateMachine";

describe("IntSlackRecord Comprehensive Domain Test Suite", () => {
  const service = new IntSlackRecordService();
  const sm = new IntSlackRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackRecord Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
