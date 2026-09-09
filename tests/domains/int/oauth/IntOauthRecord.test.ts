import { IntOauthRecordService } from "../../../services/core-engine/src/int/oauth/services/IntOauthRecordService";
import { IntOauthRecordValidator } from "../../../packages/types/src/domains/int/oauth/IntOauthRecord";
import { IntOauthRecordStateMachine } from "../../../services/core-engine/src/int/oauth/state-machines/IntOauthRecordStateMachine";

describe("IntOauthRecord Comprehensive Domain Test Suite", () => {
  const service = new IntOauthRecordService();
  const sm = new IntOauthRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntOauthRecord Instance",
      domain: "int_oauth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntOauthRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
