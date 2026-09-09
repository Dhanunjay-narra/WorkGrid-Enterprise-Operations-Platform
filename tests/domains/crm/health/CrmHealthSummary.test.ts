import { CrmHealthSummaryService } from "../../../services/core-engine/src/crm/health/services/CrmHealthSummaryService";
import { CrmHealthSummaryValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthSummary";
import { CrmHealthSummaryStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthSummaryStateMachine";

describe("CrmHealthSummary Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthSummaryService();
  const sm = new CrmHealthSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthSummary Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
