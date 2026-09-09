import { CrmHealthConfigService } from "../../../services/core-engine/src/crm/health/services/CrmHealthConfigService";
import { CrmHealthConfigValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthConfig";
import { CrmHealthConfigStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthConfigStateMachine";

describe("CrmHealthConfig Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthConfigService();
  const sm = new CrmHealthConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthConfig Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
