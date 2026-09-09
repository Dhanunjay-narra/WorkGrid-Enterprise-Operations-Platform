import { IntSalesforceReportService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceReportService";
import { IntSalesforceReportValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceReport";
import { IntSalesforceReportStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceReportStateMachine";

describe("IntSalesforceReport Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceReportService();
  const sm = new IntSalesforceReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceReport Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
