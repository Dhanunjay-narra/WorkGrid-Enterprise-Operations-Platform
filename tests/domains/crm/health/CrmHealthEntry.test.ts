import { CrmHealthEntryService } from "../../../services/core-engine/src/crm/health/services/CrmHealthEntryService";
import { CrmHealthEntryValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthEntry";
import { CrmHealthEntryStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthEntryStateMachine";

describe("CrmHealthEntry Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthEntryService();
  const sm = new CrmHealthEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthEntry Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
