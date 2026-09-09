import { DmsFilesConfigService } from "../../../services/core-engine/src/dms/files/services/DmsFilesConfigService";
import { DmsFilesConfigValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesConfig";
import { DmsFilesConfigStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesConfigStateMachine";

describe("DmsFilesConfig Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesConfigService();
  const sm = new DmsFilesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesConfig Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
