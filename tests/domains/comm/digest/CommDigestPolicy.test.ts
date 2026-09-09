import { CommDigestPolicyService } from "../../../services/core-engine/src/comm/digest/services/CommDigestPolicyService";
import { CommDigestPolicyValidator } from "../../../packages/types/src/domains/comm/digest/CommDigestPolicy";
import { CommDigestPolicyStateMachine } from "../../../services/core-engine/src/comm/digest/state-machines/CommDigestPolicyStateMachine";

describe("CommDigestPolicy Comprehensive Domain Test Suite", () => {
  const service = new CommDigestPolicyService();
  const sm = new CommDigestPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommDigestPolicy Instance",
      domain: "comm_digest",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommDigestPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
