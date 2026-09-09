import { BiCohortsReportService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsReportService";
import { BiCohortsReportValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsReport";
import { BiCohortsReportStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsReportStateMachine";

describe("BiCohortsReport Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsReportService();
  const sm = new BiCohortsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsReport Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
