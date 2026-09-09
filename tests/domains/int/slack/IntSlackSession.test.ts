import { IntSlackSessionService } from "../../../services/core-engine/src/int/slack/services/IntSlackSessionService";
import { IntSlackSessionValidator } from "../../../packages/types/src/domains/int/slack/IntSlackSession";
import { IntSlackSessionStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackSessionStateMachine";

describe("IntSlackSession Comprehensive Domain Test Suite", () => {
  const service = new IntSlackSessionService();
  const sm = new IntSlackSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackSession Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
