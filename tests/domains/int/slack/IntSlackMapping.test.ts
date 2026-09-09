import { IntSlackMappingService } from "../../../services/core-engine/src/int/slack/services/IntSlackMappingService";
import { IntSlackMappingValidator } from "../../../packages/types/src/domains/int/slack/IntSlackMapping";
import { IntSlackMappingStateMachine } from "../../../services/core-engine/src/int/slack/state-machines/IntSlackMappingStateMachine";

describe("IntSlackMapping Comprehensive Domain Test Suite", () => {
  const service = new IntSlackMappingService();
  const sm = new IntSlackMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSlackMapping Instance",
      domain: "int_slack",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSlackMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
