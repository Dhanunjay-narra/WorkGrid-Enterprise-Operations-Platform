import { IntOauthEventService } from "../../../services/core-engine/src/int/oauth/services/IntOauthEventService";
import { IntOauthEventValidator } from "../../../packages/types/src/domains/int/oauth/IntOauthEvent";
import { IntOauthEventStateMachine } from "../../../services/core-engine/src/int/oauth/state-machines/IntOauthEventStateMachine";

describe("IntOauthEvent Comprehensive Domain Test Suite", () => {
  const service = new IntOauthEventService();
  const sm = new IntOauthEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntOauthEvent Instance",
      domain: "int_oauth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntOauthEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
