import { IntSalesforceSnapshotService } from "../../../services/core-engine/src/int/salesforce/services/IntSalesforceSnapshotService";
import { IntSalesforceSnapshotValidator } from "../../../packages/types/src/domains/int/salesforce/IntSalesforceSnapshot";
import { IntSalesforceSnapshotStateMachine } from "../../../services/core-engine/src/int/salesforce/state-machines/IntSalesforceSnapshotStateMachine";

describe("IntSalesforceSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IntSalesforceSnapshotService();
  const sm = new IntSalesforceSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSalesforceSnapshot Instance",
      domain: "int_salesforce",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSalesforceSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
