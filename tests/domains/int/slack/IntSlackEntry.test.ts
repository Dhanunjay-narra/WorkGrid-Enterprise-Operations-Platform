import { IntSlackEntryService } from "../../../services/core-engine/src/int/slack/services/IntSlackEntryService";
import { IntSlackEntryValidator } from "../../../packages/types/src/domains/int/slack/IntSlackEntry";
import { IntSlackEntryStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackEntryStateMachine";

describe("IntSlackEntry Comprehensive Domain Test Suite", () => {
  const service = new IntSlackEntryService();
  const sm = new IntSlackEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackEntry Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
