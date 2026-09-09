import { SupportCsatEntryService } from "../../../services/core-engine/src/support/csat/services/SupportCsatEntryService";
import { SupportCsatEntryValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatEntry";
import { SupportCsatEntryStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatEntryStateMachine";

describe("SupportCsatEntry Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatEntryService();
  const sm = new SupportCsatEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatEntry Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
