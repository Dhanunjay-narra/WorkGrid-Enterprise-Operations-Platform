import { CrmHealthSnapshotService } from "../../../services/core-engine/src/crm/health/services/CrmHealthSnapshotService";
import { CrmHealthSnapshotValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthSnapshot";
import { CrmHealthSnapshotStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthSnapshotStateMachine";

describe("CrmHealthSnapshot Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthSnapshotService();
  const sm = new CrmHealthSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthSnapshot Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
