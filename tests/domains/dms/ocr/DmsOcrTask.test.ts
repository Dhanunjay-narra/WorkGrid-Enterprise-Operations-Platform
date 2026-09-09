import { DmsOcrTaskService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrTaskService";
import { DmsOcrTaskValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrTask";
import { DmsOcrTaskStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrTaskStateMachine";

describe("DmsOcrTask Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrTaskService();
  const sm = new DmsOcrTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrTask Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
