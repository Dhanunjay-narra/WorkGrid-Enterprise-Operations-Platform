import { DmsSignaturesPayloadService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesPayloadService";
import { DmsSignaturesPayloadValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesPayload";
import { DmsSignaturesPayloadStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesPayloadStateMachine";

describe("DmsSignaturesPayload Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesPayloadService();
  const sm = new DmsSignaturesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesPayload Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
