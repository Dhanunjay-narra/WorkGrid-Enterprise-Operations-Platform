import { IdentityReportService } from "../../../services/core-engine/src/identity/services/IdentityReportService";
import { IdentityReportValidator } from "../../../packages/types/src/domains/identity/IdentityReport";
import { IdentityReportStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityReportStateMachine";

describe("IdentityReport Comprehensive Domain Test Suite", () => {
  const service = new IdentityReportService();
  const sm = new IdentityReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityReport Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
