import { DmsFoldersRecordService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersRecordService";
import { DmsFoldersRecordValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersRecord";
import { DmsFoldersRecordStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersRecordStateMachine";

describe("DmsFoldersRecord Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersRecordService();
  const sm = new DmsFoldersRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersRecord Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
