import { DmsFilesItemService } from "../../../services/core-engine/src/dms/files/services/DmsFilesItemService";
import { DmsFilesItemValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesItem";
import { DmsFilesItemStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesItemStateMachine";

describe("DmsFilesItem Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesItemService();
  const sm = new DmsFilesItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesItem Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
