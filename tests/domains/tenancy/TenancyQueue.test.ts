import { TenancyQueueService } from "../../../services/core-engine/src/tenancy/services/TenancyQueueService";
import { TenancyQueueValidator } from "../../../packages/types/src/domains/tenancy/TenancyQueue";
import { TenancyQueueStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyQueueStateMachine";

describe("TenancyQueue Comprehensive Domain Test Suite", () => {
  const service = new TenancyQueueService();
  const sm = new TenancyQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyQueue Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
