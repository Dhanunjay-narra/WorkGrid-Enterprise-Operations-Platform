import { IdentitySummaryService } from "../../../services/core-engine/src/identity/services/IdentitySummaryService";
import { IdentitySummaryValidator } from "../../../packages/types/src/domains/identity/IdentitySummary";
import { IdentitySummaryStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentitySummaryStateMachine";

describe("IdentitySummary Comprehensive Domain Test Suite", () => {
  const service = new IdentitySummaryService();
  const sm = new IdentitySummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentitySummary Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentitySummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
