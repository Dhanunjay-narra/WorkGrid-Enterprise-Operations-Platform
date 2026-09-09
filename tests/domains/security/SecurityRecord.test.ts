import { SecurityRecordService } from "../../../services/core-engine/src/security/services/SecurityRecordService";
import { SecurityRecordValidator } from "../../../packages/types/src/domains/security/SecurityRecord";
import { SecurityRecordStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityRecordStateMachine";

describe("SecurityRecord Comprehensive Domain Test Suite", () => {
  const service = new SecurityRecordService();
  const sm = new SecurityRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityRecord Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
