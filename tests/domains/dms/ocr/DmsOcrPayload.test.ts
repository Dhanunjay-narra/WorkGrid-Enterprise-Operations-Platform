import { DmsOcrPayloadService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrPayloadService";
import { DmsOcrPayloadValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrPayload";
import { DmsOcrPayloadStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrPayloadStateMachine";

describe("DmsOcrPayload Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrPayloadService();
  const sm = new DmsOcrPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrPayload Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
