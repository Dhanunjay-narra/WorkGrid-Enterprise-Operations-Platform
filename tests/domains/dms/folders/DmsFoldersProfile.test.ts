import { DmsFoldersProfileService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersProfileService";
import { DmsFoldersProfileValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersProfile";
import { DmsFoldersProfileStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersProfileStateMachine";

describe("DmsFoldersProfile Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersProfileService();
  const sm = new DmsFoldersProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersProfile Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
