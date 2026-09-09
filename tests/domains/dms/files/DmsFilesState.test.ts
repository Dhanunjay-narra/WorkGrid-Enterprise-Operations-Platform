import { DmsFilesStateService } from "../../../services/core-engine/src/dms/files/services/DmsFilesStateService";
import { DmsFilesStateValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesState";
import { DmsFilesStateStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesStateStateMachine";

describe("DmsFilesState Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesStateService();
  const sm = new DmsFilesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesState Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
