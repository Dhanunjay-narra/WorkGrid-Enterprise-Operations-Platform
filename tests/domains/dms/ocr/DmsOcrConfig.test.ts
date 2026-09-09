import { DmsOcrConfigService } from "../../../services/core-engine/src/dms/ocr/services/DmsOcrConfigService";
import { DmsOcrConfigValidator } from "../../../packages/types/src/domains/dms/ocr/DmsOcrConfig";
import { DmsOcrConfigStateMachine } from "../../../services/core-engine/src/dms/ocr/state-machines/DmsOcrConfigStateMachine";

describe("DmsOcrConfig Comprehensive Domain Test Suite", () => {
  const service = new DmsOcrConfigService();
  const sm = new DmsOcrConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsOcrConfig Instance",
      domain: "dms_ocr",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsOcrConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
