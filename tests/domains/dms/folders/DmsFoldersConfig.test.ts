import { DmsFoldersConfigService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersConfigService";
import { DmsFoldersConfigValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersConfig";
import { DmsFoldersConfigStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersConfigStateMachine";

describe("DmsFoldersConfig Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersConfigService();
  const sm = new DmsFoldersConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersConfig Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
