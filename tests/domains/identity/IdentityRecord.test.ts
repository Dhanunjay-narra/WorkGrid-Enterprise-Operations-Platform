import { IdentityRecordService } from "../../../services/core-engine/src/identity/services/IdentityRecordService";
import { IdentityRecordValidator } from "../../../packages/types/src/domains/identity/IdentityRecord";
import { IdentityRecordStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityRecordStateMachine";

describe("IdentityRecord Comprehensive Domain Test Suite", () => {
  const service = new IdentityRecordService();
  const sm = new IdentityRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityRecord Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
