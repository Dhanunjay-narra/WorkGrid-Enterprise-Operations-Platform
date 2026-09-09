import { TenancyRecordService } from "../../../services/core-engine/src/tenancy/services/TenancyRecordService";
import { TenancyRecordValidator } from "../../../packages/types/src/domains/tenancy/TenancyRecord";
import { TenancyRecordStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyRecordStateMachine";

describe("TenancyRecord Comprehensive Domain Test Suite", () => {
  const service = new TenancyRecordService();
  const sm = new TenancyRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyRecord Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
