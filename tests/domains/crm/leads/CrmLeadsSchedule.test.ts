import { CrmLeadsScheduleService } from "../../../services/core-engine/src/crm/leads/services/CrmLeadsScheduleService";
import { CrmLeadsScheduleValidator } from "../../../packages/types/src/domains/crm/leads/CrmLeadsSchedule";
import { CrmLeadsScheduleStateMachine } from "../../../services/core-engine/src/crm/leads/state-machines/CrmLeadsScheduleStateMachine";

describe("CrmLeadsSchedule Comprehensive Domain Test Suite", () => {
  const service = new CrmLeadsScheduleService();
  const sm = new CrmLeadsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmLeadsSchedule Instance",
      domain: "crm_leads",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmLeadsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
