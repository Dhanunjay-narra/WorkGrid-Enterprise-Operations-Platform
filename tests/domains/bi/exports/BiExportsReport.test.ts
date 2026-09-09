import { BiExportsReportService } from "../../../services/core-engine/src/bi/exports/services/BiExportsReportService";
import { BiExportsReportValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsReport";
import { BiExportsReportStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsReportStateMachine";

describe("BiExportsReport Comprehensive Domain Test Suite", () => {
  const service = new BiExportsReportService();
  const sm = new BiExportsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsReport Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
