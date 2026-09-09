import { DmsFoldersScheduleService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersScheduleService";
import { DmsFoldersScheduleValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersSchedule";
import { DmsFoldersScheduleStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersScheduleStateMachine";

describe("DmsFoldersSchedule Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersScheduleService();
  const sm = new DmsFoldersScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersSchedule Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
