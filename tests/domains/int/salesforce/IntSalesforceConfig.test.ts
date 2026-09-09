import { IntSalesforceConfigService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceConfigService";
import { IntSalesforceConfigValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceConfig";
import { IntSalesforceConfigStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceConfigStateMachine";

describe("IntSalesforceConfig Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceConfigService();
  const sm = new IntSalesforceConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceConfig Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
