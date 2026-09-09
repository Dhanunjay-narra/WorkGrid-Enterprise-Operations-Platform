import { RbacReportService } from "../../../services/core-engine/src/rbac/services/RbacReportService";
import { RbacReportValidator } from "../../../packages/types/src/domains/rbac/RbacReport";
import { RbacReportStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacReportStateMachine";

describe("RbacReport Comprehensive Domain Test Suite", () => {
  const service = new RbacReportService();
  const sm = new RbacReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacReport Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
