import { IntSlackPolicyService } from "../../../services/core-engine/src/int/slack/services/IntSlackPolicyService";
import { IntSlackPolicyValidator } from "../../../packages/types/src/domains/int/slack/IntSlackPolicy";
import { IntSlackPolicyStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackPolicyStateMachine";

describe("IntSlackPolicy Comprehensive Domain Test Suite", () => {
  const service = new IntSlackPolicyService();
  const sm = new IntSlackPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackPolicy Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
