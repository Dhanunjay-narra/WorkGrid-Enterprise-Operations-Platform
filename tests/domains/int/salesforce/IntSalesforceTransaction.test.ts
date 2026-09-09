import { IntSalesforceTransactionService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceTransactionService";
import { IntSalesforceTransactionValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceTransaction";
import { IntSalesforceTransactionStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceTransactionStateMachine";

describe("IntSalesforceTransaction Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceTransactionService();
  const sm = new IntSalesforceTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceTransaction Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
