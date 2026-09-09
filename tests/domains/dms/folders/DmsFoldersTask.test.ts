import { DmsFoldersTaskService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersTaskService";
import { DmsFoldersTaskValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersTask";
import { DmsFoldersTaskStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersTaskStateMachine";

describe("DmsFoldersTask Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersTaskService();
  const sm = new DmsFoldersTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersTask Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
