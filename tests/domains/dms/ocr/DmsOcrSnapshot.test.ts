import { DmsOcrSnapshotService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrSnapshotService";
import { DmsOcrSnapshotValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrSnapshot";
import { DmsOcrSnapshotStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrSnapshotStateMachine";

describe("DmsOcrSnapshot Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrSnapshotService();
  const sm = new DmsOcrSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrSnapshot Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
