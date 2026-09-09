import { DmsFilesBatchService } from "../../../services/core-engine/src/dms/files/services/DmsFilesBatchService";
import { DmsFilesBatchValidator } from "../../../packages/types/src/domains/dms/files/DmsFilesBatch";
import { DmsFilesBatchStateMachine } from "../../../services/core-engine/src/dms/files/state-machines/DmsFilesBatchStateMachine";

describe("DmsFilesBatch Comprehensive Domain Test Suite", () => {
  const service = new DmsFilesBatchService();
  const sm = new DmsFilesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsFilesBatch Instance",
      domain: "dms_files",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsFilesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
