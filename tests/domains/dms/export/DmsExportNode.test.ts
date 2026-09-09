import { DmsExportNodeService } from "../../../services/core-engine/src/dms/export/services/DmsExportNodeService";
import { DmsExportNodeValidator } from "../../../packages/types/src/domains/dms/export/DmsExportNode";
import { DmsExportNodeStateMachine } from "../../../services/core-engine/src/dms/export/state-machines/DmsExportNodeStateMachine";

describe("DmsExportNode Comprehensive Domain Test Suite", () => {
  const service = new DmsExportNodeService();
  const sm = new DmsExportNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsExportNode Instance",
      domain: "dms_export",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsExportNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
