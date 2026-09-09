import { CommDigestRuleService } from "../../../services/core-engine/src/comm/digest/services/CommDigestRuleService";
import { CommDigestRuleValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestRule";
import { CommDigestRuleStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestRuleStateMachine";

describe("CommDigestRule Comprehensive Domain Test Suite", () => {
  const service = new CommDigestRuleService();
  const sm = new CommDigestRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestRule Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
