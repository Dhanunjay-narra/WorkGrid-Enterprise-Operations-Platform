import { DmsFoldersThresholdService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersThresholdService";
import { DmsFoldersThresholdValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersThreshold";
import { DmsFoldersThresholdStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersThresholdStateMachine";

describe("DmsFoldersThreshold Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersThresholdService();
  const sm = new DmsFoldersThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersThreshold Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
