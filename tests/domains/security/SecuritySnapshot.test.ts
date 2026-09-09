import { SecuritySnapshotService } from "../../../services/core-engine/src/security/services/SecuritySnapshotService";
import { SecuritySnapshotValidator } from "../../../packages/types/src/domains/security/SecuritySnapshot";
import { SecuritySnapshotStateMachine } from "../../../services/core-engine/src/security/state-machines/SecuritySnapshotStateMachine";

describe("SecuritySnapshot Comprehensive Domain Test Suite", () => {
  const service = new SecuritySnapshotService();
  const sm = new SecuritySnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecuritySnapshot Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecuritySnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
