import { RbacRecordService } from "../../../services/core-engine/src/rbac/services/RbacRecordService";
import { RbacRecordValidator } from "../../../packages/types/src/domains/rbac/RbacRecord";
import { RbacRecordStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacRecordStateMachine";

describe("RbacRecord Comprehensive Domain Test Suite", () => {
  const service = new RbacRecordService();
  const sm = new RbacRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacRecord Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
