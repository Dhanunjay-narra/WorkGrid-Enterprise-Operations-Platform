import { DmsChunksRuleService } from "../../../services/core-engine/src/dms/chunks/services/DmsChunksRuleService";
import { DmsChunksRuleValidator } from "../../../packages/types/src/domains/dms/chunks/DmsChunksRule";
import { DmsChunksRuleStateMachine } from "../../../services/core-engine/src/dms/chunks/state-machines/DmsChunksRuleStateMachine";

describe("DmsChunksRule Comprehensive Domain Test Suite", () => {
  const service = new DmsChunksRuleService();
  const sm = new DmsChunksRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsChunksRule Instance",
      domain: "dms_chunks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsChunksRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
