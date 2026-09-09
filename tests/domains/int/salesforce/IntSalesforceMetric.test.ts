import { IntSalesforceMetricService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceMetricService";
import { IntSalesforceMetricValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceMetric";
import { IntSalesforceMetricStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceMetricStateMachine";

describe("IntSalesforceMetric Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceMetricService();
  const sm = new IntSalesforceMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceMetric Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
