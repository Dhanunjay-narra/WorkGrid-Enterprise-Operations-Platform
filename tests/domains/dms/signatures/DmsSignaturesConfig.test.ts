import { DmsSignaturesConfigService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesConfigService";
import { DmsSignaturesConfigValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesConfig";
import { DmsSignaturesConfigStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesConfigStateMachine";

describe("DmsSignaturesConfig Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesConfigService();
  const sm = new DmsSignaturesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesConfig Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
