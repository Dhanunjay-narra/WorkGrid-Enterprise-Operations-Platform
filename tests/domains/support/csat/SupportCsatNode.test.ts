import { SupportCsatNodeService } from "../../../services/core-engine/src/support/csat/services/SupportCsatNodeService";
import { SupportCsatNodeValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatNode";
import { SupportCsatNodeStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatNodeStateMachine";

describe("SupportCsatNode Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatNodeService();
  const sm = new SupportCsatNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatNode Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
