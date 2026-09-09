import { IntSalesforceMappingService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceMappingService";
import { IntSalesforceMappingValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceMapping";
import { IntSalesforceMappingStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceMappingStateMachine";

describe("IntSalesforceMapping Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceMappingService();
  const sm = new IntSalesforceMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceMapping Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
