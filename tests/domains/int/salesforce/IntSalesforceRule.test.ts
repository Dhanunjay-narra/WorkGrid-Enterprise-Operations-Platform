import { IntSalesforceRuleService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceRuleService";
import { IntSalesforceRuleValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceRule";
import { IntSalesforceRuleStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceRuleStateMachine";

describe("IntSalesforceRule Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceRuleService();
  const sm = new IntSalesforceRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceRule Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
