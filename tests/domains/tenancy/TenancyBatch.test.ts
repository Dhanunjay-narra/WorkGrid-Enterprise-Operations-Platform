import { TenancyBatchService } from "../../../services/core-engine/src/tenancy/services/TenancyBatchService";
import { TenancyBatchValidator } from "../../../packages/types/src/domains/tenancy/TenancyBatch";
import { TenancyBatchStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyBatchStateMachine";

describe("TenancyBatch Comprehensive Domain Test Suite", () => {
  const service = new TenancyBatchService();
  const sm = new TenancyBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyBatch Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
