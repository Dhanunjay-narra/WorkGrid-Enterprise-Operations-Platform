import { DmsFilesSnapshotService } from "../../../services/core-engine/src/dms/files/services/DmsFilesSnapshotService";
import { DmsFilesSnapshotValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesSnapshot";
import { DmsFilesSnapshotStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesSnapshotStateMachine";

describe("DmsFilesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesSnapshotService();
  const sm = new DmsFilesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesSnapshot Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
