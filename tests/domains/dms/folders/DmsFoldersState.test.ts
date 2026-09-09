import { DmsFoldersStateService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersStateService";
import { DmsFoldersStateValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersState";
import { DmsFoldersStateStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersStateStateMachine";

describe("DmsFoldersState Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersStateService();
  const sm = new DmsFoldersStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersState Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
