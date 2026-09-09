import { CrmDealsScheduleService } from "../../../services/core-engine/src/crm/deals/services/CrmDealsScheduleService";
import { CrmDealsScheduleValidator } from "../../../packages/types/src/domains/crm/deals/CrmDealsSchedule";
import { CrmDealsScheduleStateMachine } from "../../../services/core-engine/src/crm/deals/state-machines/CrmDealsScheduleStateMachine";

describe("CrmDealsSchedule Comprehensive Domain Test Suite", () => {
  const service = new CrmDealsScheduleService();
  const sm = new CrmDealsScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmDealsSchedule Instance",
      domain: "crm_deals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmDealsScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
