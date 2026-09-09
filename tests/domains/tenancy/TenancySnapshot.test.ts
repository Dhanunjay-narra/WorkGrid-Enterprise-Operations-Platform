import { TenancySnapshotService } from "../../../services/core-engine/src/tenancy/services/TenancySnapshotService";
import { TenancySnapshotValidator } from "../../../packages/types/src/domains/tenancy/TenancySnapshot";
import { TenancySnapshotStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancySnapshotStateMachine";

describe("TenancySnapshot Comprehensive Domain Test Suite", () => {
  const service = new TenancySnapshotService();
  const sm = new TenancySnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancySnapshot Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancySnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
