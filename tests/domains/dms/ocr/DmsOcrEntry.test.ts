import { DmsOcrEntryService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrEntryService";
import { DmsOcrEntryValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrEntry";
import { DmsOcrEntryStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrEntryStateMachine";

describe("DmsOcrEntry Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrEntryService();
  const sm = new DmsOcrEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrEntry Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
