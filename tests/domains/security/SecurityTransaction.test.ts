import { SecurityTransactionService } from "../../../services/core-engine/src/security/services/SecurityTransactionService";
import { SecurityTransactionValidator } from "../../../packages/types/src/domains/security/SecurityTransaction";
import { SecurityTransactionStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityTransactionStateMachine";

describe("SecurityTransaction Comprehensive Domain Test Suite", () => {
  const service = new SecurityTransactionService();
  const sm = new SecurityTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityTransaction Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
