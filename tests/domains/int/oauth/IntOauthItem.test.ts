import { IntOauthItemService } from "../../../services/core-engine/src/int/oauth/services/IntOauthItemService";
import { IntOauthItemValidator } from "../../../packages/types/src/domains/int/oauth/IntOauthItem";
import { IntOauthItemStateMachine } from "../../../services/core-engine/src/int/oauth/state-machines/IntOauthItemStateMachine";

describe("IntOauthItem Comprehensive Domain Test Suite", () => {
  const service = new IntOauthItemService();
  const sm = new IntOauthItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntOauthItem Instance",
      domain: "int_oauth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntOauthItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
