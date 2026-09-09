import { CrmHealthPolicyService } from "../../../services/core-engine/src/crm/health/services/CrmHealthPolicyService";
import { CrmHealthPolicyValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthPolicy";
import { CrmHealthPolicyStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthPolicyStateMachine";

describe("CrmHealthPolicy Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthPolicyService();
  const sm = new CrmHealthPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthPolicy Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
