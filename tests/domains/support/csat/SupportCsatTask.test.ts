import { SupportCsatTaskService } from "../../../services/core-engine/src/support/csat/services/SupportCsatTaskService";
import { SupportCsatTaskValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatTask";
import { SupportCsatTaskStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatTaskStateMachine";

describe("SupportCsatTask Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatTaskService();
  const sm = new SupportCsatTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatTask Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
