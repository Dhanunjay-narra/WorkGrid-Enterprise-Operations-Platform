import { CrmHealthTransactionService } from "../../../services/core-engine/src/crm/health/services/CrmHealthTransactionService";
import { CrmHealthTransactionValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthTransaction";
import { CrmHealthTransactionStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthTransactionStateMachine";

describe("CrmHealthTransaction Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthTransactionService();
  const sm = new CrmHealthTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthTransaction Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
