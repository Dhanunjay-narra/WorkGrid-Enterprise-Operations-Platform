import { CrmLeadsConfigService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsConfigService";
import { CrmLeadsConfigValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsConfig";
import { CrmLeadsConfigStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsConfigStateMachine";

describe("CrmLeadsConfig Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsConfigService();
  const sm = new CrmLeadsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsConfig Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
