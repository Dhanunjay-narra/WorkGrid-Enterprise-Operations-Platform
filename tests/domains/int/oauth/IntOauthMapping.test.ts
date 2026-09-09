import { IntOauthMappingService } from "../../../services/core-engine/src/int/oauth/services/IntOauthMappingService";
import { IntOauthMappingValidator } from "../../../packages/types/src/domains/int/oauth/IntOauthMapping";
import { IntOauthMappingStateMachine } from "../../../services/core-engine/src/int/oauth/state-machines/IntOauthMappingStateMachine";

describe("IntOauthMapping Comprehensive Domain Test Suite", () => {
  const service = new IntOauthMappingService();
  const sm = new IntOauthMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntOauthMapping Instance",
      domain: "int_oauth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntOauthMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
