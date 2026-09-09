import { RbacPayloadService } from "../../../services/core-engine/src/rbac/services/RbacPayloadService";
import { RbacPayloadValidator } from "../../../packages/types/src/domains/rbac/RbacPayload";
import { RbacPayloadStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacPayloadStateMachine";

describe("RbacPayload Comprehensive Domain Test Suite", () => {
  const service = new RbacPayloadService();
  const sm = new RbacPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacPayload Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
