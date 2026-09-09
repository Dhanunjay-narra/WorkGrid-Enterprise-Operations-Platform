import { SupportSlaReportService } from "../../../services/core-engine/src/support/sla/services/SupportSlaReportService";
import { SupportSlaReportValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaReport";
import { SupportSlaReportStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaReportStateMachine";

describe("SupportSlaReport Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaReportService();
  const sm = new SupportSlaReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaReport Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
