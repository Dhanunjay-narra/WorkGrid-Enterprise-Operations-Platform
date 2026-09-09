import { CrmHealthRecordService } from "../../../services/core-engine/src/crm/health/services/CrmHealthRecordService";
import { CrmHealthRecordValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthRecord";
import { CrmHealthRecordStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthRecordStateMachine";

describe("CrmHealthRecord Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthRecordService();
  const sm = new CrmHealthRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthRecord Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
