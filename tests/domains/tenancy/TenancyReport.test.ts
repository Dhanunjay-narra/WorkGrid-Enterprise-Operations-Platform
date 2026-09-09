import { TenancyReportService } from "../../../services/core-engine/src/tenancy/services/TenancyReportService";
import { TenancyReportValidator } from "../../../packages/types/src/domains/tenancy/TenancyReport";
import { TenancyReportStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyReportStateMachine";

describe("TenancyReport Comprehensive Domain Test Suite", () => {
  const service = new TenancyReportService();
  const sm = new TenancyReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyReport Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
