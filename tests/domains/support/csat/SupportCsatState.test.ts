import { SupportCsatStateService } from "../../../services/core-engine/src/support/csat/services/SupportCsatStateService";
import { SupportCsatStateValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatState";
import { SupportCsatStateStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatStateStateMachine";

describe("SupportCsatState Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatStateService();
  const sm = new SupportCsatStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatState Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
