import { DmsSignaturesTaskService } from "../../../services/core-engine/src/dms/signatures/services/DmsSignaturesTaskService";
import { DmsSignaturesTaskValidator } from "../../../packages/types/src/domains/dms/signatures/DmsSignaturesTask";
import { DmsSignaturesTaskStateMachine } from "../../../services/core-engine/src/dms/signatures/state-machines/DmsSignaturesTaskStateMachine";

describe("DmsSignaturesTask Comprehensive Domain Test Suite", () => {
  const service = new DmsSignaturesTaskService();
  const sm = new DmsSignaturesTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsSignaturesTask Instance",
      domain: "dms_signatures",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsSignaturesTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
