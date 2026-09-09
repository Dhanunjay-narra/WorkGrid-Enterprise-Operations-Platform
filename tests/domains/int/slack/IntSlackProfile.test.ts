import { IntSlackProfileService } from "../../../services/core-engine/src/int/slack/services/IntSlackProfileService";
import { IntSlackProfileValidator } from "../../../packages/types/src/domains/int/slack/IntSlackProfile";
import { IntSlackProfileStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackProfileStateMachine";

describe("IntSlackProfile Comprehensive Domain Test Suite", () => {
  const service = new IntSlackProfileService();
  const sm = new IntSlackProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackProfile Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
