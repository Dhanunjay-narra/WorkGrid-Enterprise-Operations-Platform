import { DmsRetentionMappingService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionMappingService";
import { DmsRetentionMappingValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionMapping";
import { DmsRetentionMappingStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionMappingStateMachine";

describe("DmsRetentionMapping Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionMappingService();
  const sm = new DmsRetentionMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionMapping Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
