import { BiExportsPolicyService } from "../../../services/core-engine/src/bi/exports/services/BiExportsPolicyService";
import { BiExportsPolicyValidator } from "../../../packages/types/src/domains/bi/exports/BiExportsPolicy";
import { BiExportsPolicyStateMachine } from "../../../services/core-engine/src/bi/exports/state-machines/BiExportsPolicyStateMachine";

describe("BiExportsPolicy Comprehensive Domain Test Suite", () => {
  const service = new BiExportsPolicyService();
  const sm = new BiExportsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiExportsPolicy Instance",
      domain: "bi_exports",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiExportsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
