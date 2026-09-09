import { CrmHealthMappingService } from "../../../services/core-engine/src/crm/health/services/CrmHealthMappingService";
import { CrmHealthMappingValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthMapping";
import { CrmHealthMappingStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthMappingStateMachine";

describe("CrmHealthMapping Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthMappingService();
  const sm = new CrmHealthMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthMapping Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
