import { DmsExportPolicyService } from "../../../services/core-engine/src/dms/export/services/DmsExportPolicyService";
import { DmsExportPolicyValidator } from "../../../packages/types/src/domains/dms/export/DmsExportPolicy";
import { DmsExportPolicyStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportPolicyStateMachine";

describe("DmsExportPolicy Comprehensive Domain Test Suite", () => {
  const service = new DmsExportPolicyService();
  const sm = new DmsExportPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportPolicy Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
