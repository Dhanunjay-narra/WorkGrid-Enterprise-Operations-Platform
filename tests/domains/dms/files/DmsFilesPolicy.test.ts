import { DmsFilesPolicyService } from "../../../services/core-engine/src/dms/files/services/DmsFilesPolicyService";
import { DmsFilesPolicyValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesPolicy";
import { DmsFilesPolicyStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesPolicyStateMachine";

describe("DmsFilesPolicy Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesPolicyService();
  const sm = new DmsFilesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesPolicy Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
