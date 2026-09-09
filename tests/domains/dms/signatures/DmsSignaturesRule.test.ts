import { DmsSignaturesRuleService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesRuleService";
import { DmsSignaturesRuleValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesRule";
import { DmsSignaturesRuleStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesRuleStateMachine";

describe("DmsSignaturesRule Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesRuleService();
  const sm = new DmsSignaturesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesRule Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
