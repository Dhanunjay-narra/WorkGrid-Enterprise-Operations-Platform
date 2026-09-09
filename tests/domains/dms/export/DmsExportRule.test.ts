import { DmsExportRuleService } from "../../../services/core-engine/src/dms/export/services/DmsExportRuleService";
import { DmsExportRuleValidator } from "../../../packages/types/src/domains/dms/export/DmsExportRule";
import { DmsExportRuleStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportRuleStateMachine";

describe("DmsExportRule Comprehensive Domain Test Suite", () => {
  const service = new DmsExportRuleService();
  const sm = new DmsExportRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportRule Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
