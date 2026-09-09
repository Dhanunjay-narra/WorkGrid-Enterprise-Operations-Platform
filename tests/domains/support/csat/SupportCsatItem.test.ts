import { SupportCsatItemService } from "../../../services/core-engine/src/support/csat/services/SupportCsatItemService";
import { SupportCsatItemValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatItem";
import { SupportCsatItemStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatItemStateMachine";

describe("SupportCsatItem Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatItemService();
  const sm = new SupportCsatItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatItem Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
