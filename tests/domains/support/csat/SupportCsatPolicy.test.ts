import { SupportCsatPolicyService } from "../../../services/core-engine/src/support/csat/services/SupportCsatPolicyService";
import { SupportCsatPolicyValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatPolicy";
import { SupportCsatPolicyStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatPolicyStateMachine";

describe("SupportCsatPolicy Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatPolicyService();
  const sm = new SupportCsatPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatPolicy Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
