import { DmsFoldersRuleService } from "../../../services/core-engine/src/dms/folders/services/DmsFoldersRuleService";
import { DmsFoldersRuleValidator } from "../../../packages/types/src/domains/dms/folders/DmsFoldersRule";
import { DmsFoldersRuleStateMachine } from "../../../services/core-engine/src/dms/folders/state-machines/DmsFoldersRuleStateMachine";

describe("DmsFoldersRule Comprehensive Domain Test Suite", () => {
  const service = new DmsFoldersRuleService();
  const sm = new DmsFoldersRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFoldersRule Instance",
      domain: "dms_folders",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFoldersRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
